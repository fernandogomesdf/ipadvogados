import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImobiliarioPage } from './imobiliario.page';

const routes: Routes = [
  {
    path: '',
    component: ImobiliarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImobiliarioPageRoutingModule {}
