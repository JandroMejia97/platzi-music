import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent {
  @Input() albums: any[];
  @Input() slideOpts: any;
  @Output() selectedAlbum = new EventEmitter<any>();

  constructor() { }

}
