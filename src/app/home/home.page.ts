import { Component } from '@angular/core';
import { SongService } from '../core/services/song.service';
import { ModalController } from '@ionic/angular';
import { SongsModalComponent } from './components/songs-modal/songs-modal.component';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artists: any [] = [];
  songs: any[] = [];
  albums: any[] = [];
  song: any;
  currentSong: any;
  newTime: any;
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400
  };

  constructor(
    private songService: SongService,
    private messageService: MessageService,
    private modalController: ModalController,
  ) { }

  ionViewDidEnter() {
    this.songService.getNewReleases().subscribe((newReleases: any) => {
      this.songs = newReleases.albums.items.filter(e => e.album_type === 'single');
      this.albums = newReleases.albums.items.filter(e => e.album_type === 'album');
    });
    this.artists = this.songService.getArtists();
  }

  async showArtistSongs(artist: any) {
    await this.songService.getArtistTopTracks(artist.id).subscribe(async resp => {
      const songs = resp;
      this.showModal(artist, 'Top Tracks', songs.tracks);
    });
  }

  async showAlbumSongs(album: any) {
    await this.songService.getAlbumTracks(album.id).subscribe(async resp => {
      const songs = resp;
      this.showModal(album, 'Album Tracks', songs.items);
    });
  }

  async showModal(object: any[], title: string, songs: any) {
    const modal = await this.modalController.create({
      component: SongsModalComponent,
      componentProps: {
        title,
        object,
        songs
      }
    });
    modal.onDidDismiss().then(dataReturned => {
      if (dataReturned.data) {
        this.song = dataReturned.data;
        if (this.currentSong) {
          this.pause();
        }
        this.currentSong = new Audio(this.song.preview_url);
        this.newTime = 0;
      }
    });
    return await modal.present();
  }

  play() {
    if (this.song.preview_url) {
      this.currentSong.play();
      this.currentSong.addEventListener('timeupdate', () => {
        this.newTime = (this.currentSong.currentTime / this.currentSong.duration);
      });
      this.song.playing = true;
    } else {
      this.messageService.openToast('This song does not have a preview URL.');
    }
  }

  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

}
