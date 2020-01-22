import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Coordinate } from '../core/models/coordinate.model';
import { SongService } from '../core/services/song.service';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage {
  currentCenter: Coordinate;
  coordinates: Coordinate[] = [];
  defaultZoom = 14;
  searching = false;
  text = 'Enter keywords to perform a search.';
  songs: any[];
  song: any;
  currentSong: HTMLAudioElement;

  constructor(
    private songService: SongService
  ) { }

  ionViewDidEnter() {
    this.getCurrentPosition();
    this.watchPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude
    };
  }

  async watchPosition() {
    Geolocation.watchPosition({}, pos => {
      this.currentCenter = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      };
      this.coordinates.push(this.currentCenter);
    });
  }

  async getTracks(keywords: string) {
    this.searching = true;
    if (keywords.length > 0) {
      this.songService.searchTracks(keywords).subscribe(async resp => {
        this.songs = await resp.tracks.items.filter((item: any) => item.preview_url);
        if (this.songs.length === 0) {
          this.text = 'There are no results for these keywords.';
        }
        this.searching = false;
      });
    } else {
      this.text = 'Enter keywords to perform a search.';
      this.songs = [];
    }
  }

  play(song: any) {
    if (this.currentSong) {
      this.pause();
    }
    this.song = song;
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener('ended', () => this.song.playing = false);
    this.song.playing = true;
  }

  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }
}
