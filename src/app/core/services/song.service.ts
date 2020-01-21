import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as artists from './artists.json';

@Injectable({
    providedIn: 'root'
})
export class SongService {
    apiUrl = 'https://platzi-music-api.now.sh';
    constructor(private http: HttpClient) {}

    getNewReleases() {
        return this.http.get<any>(`${this.apiUrl}/browse/new-releases`);
    }

    getArtists() {
        return artists.items;
    }

    getArtistTopTracks(artistId) {
        return this.http.get<any>(`${this.apiUrl}/artists/${artistId}/top-tracks?country=AR`);
    }

    getAlbumTracks(albumId) {
        return this.http.get<any>(`${this.apiUrl}/albums/${albumId}/tracks?country=AR`);
    }
}
