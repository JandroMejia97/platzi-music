import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage {
  @Input() artist: any;
  @Input() songs: any[];

  constructor(private modalController: ModalController) { }

  async selectSong(song: any) {
    await this.modalController.dismiss(song);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
