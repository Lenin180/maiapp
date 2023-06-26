import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { //ruta pagina inico
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  { ///ruta creditos 
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then( m => m.CreditosPageModule)
  },  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'cuestionarios',
    loadChildren: () => import('./cuestionarios/cuestionarios.module').then( m => m.CuestionariosPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
