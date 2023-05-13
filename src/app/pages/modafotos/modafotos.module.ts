import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModafotosPageRoutingModule } from './modafotos-routing.module';

import { ModafotosPage } from './modafotos.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModafotosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModafotosPage]
})
export class ModafotosPageModule {}
