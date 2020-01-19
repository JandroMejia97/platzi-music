import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../core/services/authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private navController: NavController,
    private menuController: MenuController,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menuController.close();
  }

  logOut() {
    this.authService.logOut();
    this.navController.navigateRoot('/auth/login');
  }

}
