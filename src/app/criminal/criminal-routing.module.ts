import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriminalPage } from './criminal.page';

const routes: Routes = [
  {
    path: '',
    component: CriminalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriminalPageRoutingModule {}
