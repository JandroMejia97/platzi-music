import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent {
  @Input() artists: any[];
  @Input() slideOpts: any;
  @Output() selectedArtist = new EventEmitter<any>();

  constructor() { }

}
