import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModafotosPage } from './modafotos.page';

const routes: Routes = [
  {
    path: '',
    component: ModafotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModafotosPageRoutingModule {}
