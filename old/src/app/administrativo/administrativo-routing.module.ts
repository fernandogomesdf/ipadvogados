import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativoPage } from './administrativo.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativoPageRoutingModule {}
