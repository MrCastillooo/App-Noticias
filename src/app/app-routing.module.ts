import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perro',
    loadChildren: () => import('./pages/perro/perro.module').then( m => m.PerroPageModule)
  },
  {
    path: 'armadura',
    loadChildren: () => import('./pages/armadura/armadura.module').then( m => m.ArmaduraPageModule)
  },
  {
    path: 'pizarron',
    loadChildren: () => import('./pages/pizarron/pizarron.module').then( m => m.PizarronPageModule)
  },
  {
    path: 'piedra',
    loadChildren: () => import('./pages/piedra/piedra.module').then( m => m.PiedraPageModule)
  },
  {
    path: 'computadora',
    loadChildren: () => import('./pages/computadora/computadora.module').then( m => m.ComputadoraPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
