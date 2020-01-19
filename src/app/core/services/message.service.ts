import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public toastController: ToastController) { }

  async openToast(message: string, duration: number = 3000, closeButtonText: string = 'OK') {
    const toast = await this.toastController.create({
      message,
      duration,
      closeButtonText,
      showCloseButton: true,
      color: 'dark'
    });
    toast.present();
  }

  async openToastWithOptions(...options: any[]) {
    const toastOptions: any = {};
    options.forEach(option => {
      for (const key in option) {
        if (option.hasOwnProperty(key)) {
          toastOptions[key] = option[key];
        }
      }
    });
    const toast = await this.toastController.create(toastOptions);
    toast.present();
  }
}
