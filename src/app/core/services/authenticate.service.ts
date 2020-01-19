import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController } from '@ionic/angular';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private navCtrl: NavController,
    private ngAuth: AngularFireAuth,
    private ngDb: AngularFireDatabase,
    private messageService: MessageService
  ) { }

  async signIn(credentials: any) {
    return this.ngAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(_ => {
      this.ngDb.database.ref('user').push({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email
      });
      this.log('Successful Register.');
      this.navCtrl.navigateForward('/auth/login');
    })
    .catch(error => {
      this.log(error.message);
    });
  }

  async logIn(credentials: any) {
    return this.ngAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(_ => {
      this.log('Successful Income.');
      this.navCtrl.navigateForward('/home');
    })
    .catch(error => {
      this.log(error.message);
    });
  }

  logOut() {
    return this.ngAuth.auth.signOut();
  }

  hasUser() {
    return this.ngAuth.authState;
  }

  log(message: string) {
    return this.messageService.openToast(message, 4000);
  }

}
