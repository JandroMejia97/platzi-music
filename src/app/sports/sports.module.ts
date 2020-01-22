import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsPageRoutingModule } from './sports-routing.module';

import { SportsPage } from './sports.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    AgmCoreModule,
    SportsPageRoutingModule
  ],
  declarations: [SportsPage]
})
export class SportsPageModule {}
