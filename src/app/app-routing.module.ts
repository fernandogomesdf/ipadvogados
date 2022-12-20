import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'israel',
    loadChildren: () => import('./israel/israel.module').then(m => m.IsraelPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'faleconosco',
    loadChildren: () => import('./faleconosco/faleconosco.module').then( m => m.FaleconoscoPageModule)
  },
  {
    path: 'criminal',
    loadChildren: () => import('./criminal/criminal.module').then( m => m.CriminalPageModule)
  },
  {
    path: 'empresarial',
    loadChildren: () => import('./empresarial/empresarial.module').then( m => m.EmpresarialPageModule)
  },
  {
    path: 'trabalhista',
    loadChildren: () => import('./trabalhista/trabalhista.module').then( m => m.TrabalhistaPageModule)
  },
  {
    path: 'imobiliario',
    loadChildren: () => import('./imobiliario/imobiliario.module').then( m => m.ImobiliarioPageModule)
  },
  {
    path: 'medico',
    loadChildren: () => import('./medico/medico.module').then( m => m.MedicoPageModule)
  },
  {
    path: 'tributario',
    loadChildren: () => import('./tributario/tributario.module').then( m => m.TributarioPageModule)
  },
  {
    path: 'superiores',
    loadChildren: () => import('./superiores/superiores.module').then( m => m.SuperioresPageModule)
  },
  {
    path: 'administrativo',
    loadChildren: () => import('./administrativo/administrativo.module').then( m => m.AdministrativoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
