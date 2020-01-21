import { Component } from '@angular/core';
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  user: any;
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.dataUrl);
    console.log(image);
  }

}
