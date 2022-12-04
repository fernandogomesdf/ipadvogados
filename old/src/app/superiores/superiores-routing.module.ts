import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperioresPage } from './superiores.page';

const routes: Routes = [
  {
    path: '',
    component: SuperioresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperioresPageRoutingModule {}
