import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)},
  {
    path: 'estudios',
    loadChildren: () => import('./pages/estudios/estudios.module').then( m => m.EstudiosPageModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./pages/grupos/grupos.module').then( m => m.GruposPageModule)
  },
  {
    path: 'cuadrante-horario',
    loadChildren: () => import('./pages/cuadrante-horario/cuadrante-horario.module').then( m => m.CuadranteHorarioPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
