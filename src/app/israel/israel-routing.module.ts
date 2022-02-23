import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsraelPage } from './israel.page';

const routes: Routes = [
  {
    path: '',
    component: IsraelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsraelPageRoutingModule {}
