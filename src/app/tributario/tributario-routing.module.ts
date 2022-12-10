import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TributarioPage } from './tributario.page';

const routes: Routes = [
  {
    path: '',
    component: TributarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TributarioPageRoutingModule {}
