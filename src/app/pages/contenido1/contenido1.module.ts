import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contenido1PageRoutingModule } from './contenido1-routing.module';

import { Contenido1Page } from './contenido1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contenido1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Contenido1Page]
})
export class Contenido1PageModule {}
