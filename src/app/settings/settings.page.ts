import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  user: any;
  uploadProgress$: Observable<number>;

  constructor(
    private ngAuth: AngularFireAuth,
    private ngStorage: AngularFireStorage,
    public loadingController: LoadingController
  ) {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.user = this.ngAuth.auth.currentUser;
  }

  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.uploadPhoto(image);
  }

  async uploadPhoto(image) {
    const path = `images/users/profile_pictures/${this.user.uid}/`;
    const fileRef = this.ngStorage.ref(path);
    const base64Photo = image.dataUrl.split(',')[1];
    const task = fileRef.putString(base64Photo, 'base64', {contentType: `image/${image.format}`});
    this.uploadProgress$ = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL()
        .subscribe(url => {
          this.user.updateProfile({
            photoURL: url
          });
        });
      })
    ).subscribe();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Loading, please wait...',
    });
    return await loading.present();
  }

}
