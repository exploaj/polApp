import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contenido1Page } from './contenido1.page';

const routes: Routes = [
  {
    path: '',
    component: Contenido1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contenido1PageRoutingModule {}
