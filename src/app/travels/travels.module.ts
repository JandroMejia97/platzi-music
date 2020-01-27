import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelsPageRoutingModule } from './travels-routing.module';

import { TravelsPage } from './travels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelsPageRoutingModule
  ],
  declarations: [TravelsPage]
})
export class TravelsPageModule {}
