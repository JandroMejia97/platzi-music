import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelsPage } from './travels.page';

const routes: Routes = [
  {
    path: '',
    component: TravelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelsPageRoutingModule {}
