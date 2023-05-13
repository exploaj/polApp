import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaPage } from './moda.page';

const routes: Routes = [
  {
    path: '',
    component: ModaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaPageRoutingModule {}
