import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent {
  @Input() songs: any[];
  @Input() slideOpts: any;
  @Output() selectedSong = new EventEmitter();

  constructor() { }

}
