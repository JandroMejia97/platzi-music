import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongsModalComponent } from './components/songs-modal/songs-modal.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    PlayerComponent,
    SongListComponent,
    AlbumListComponent,
    ArtistListComponent,
    SongsModalComponent
  ],
  entryComponents: [
    SongsModalComponent
  ]
})
export class HomePageModule { }
