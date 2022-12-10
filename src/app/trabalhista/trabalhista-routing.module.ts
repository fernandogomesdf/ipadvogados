import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalhistaPage } from './trabalhista.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalhistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabalhistaPageRoutingModule {}
