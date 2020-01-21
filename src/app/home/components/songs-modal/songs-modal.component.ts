import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.component.html',
  styleUrls: ['./songs-modal.component.scss'],
})
export class SongsModalComponent {
  @Input() object: any;
  @Input() songs: any[];
  @Input() title: string;

  constructor(private modalController: ModalController) { }

  async selectSong(song: any) {
    await this.modalController.dismiss(song);
  }

}
