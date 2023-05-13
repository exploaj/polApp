import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaPageRoutingModule } from './moda-routing.module';

import { ModaPage } from './moda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaPageRoutingModule
  ],
  declarations: [ModaPage]
})
export class ModaPageModule {}
