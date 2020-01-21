import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SpotifyToken } from '../models/spotify-token.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  apiUrl = 'https://accounts.spotify.com/api/token';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${environment.spotify.clientId}:${environment.spotify.secretClientId}`)}`
    })
  };
  // tslint:disable-next-line: variable-name
  private _token: SpotifyToken;

  get token(): SpotifyToken {
    this.storage.get('spotifyToken')
    .then(token => {
      token.access_token = atob(token.access_token);
      this.token = token;
    })
    .catch(_ => this.postToken());
    return this._token;
  }

  set token(token: SpotifyToken) {
    this._token = token;
  }

  constructor(private http: HttpClient, private storage: Storage) { }

  postToken(): Observable<SpotifyToken> {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'client_credentials');
    const body = urlSearchParams.toString();
    return this.http.post<SpotifyToken>(this.apiUrl, body, this.httpOptions).pipe(
      tap((resp: SpotifyToken) => {
        resp.access_token = btoa(resp.access_token);
        this.storage.set('spotifyToken', resp);
      })
    );
  }

  toString() {
    return `${this.token.token_type} ${this.token.access_token}`;
  }

}
