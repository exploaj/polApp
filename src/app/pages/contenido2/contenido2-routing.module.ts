import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contenido2Page } from './contenido2.page';

const routes: Routes = [
  {
    path: '',
    component: Contenido2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contenido2PageRoutingModule {}
