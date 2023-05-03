import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Registro } from '../models/registro.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public dataLocal: DataLocalService ) {}

  abrirRegistro( registro: Registro  ) {
    console.log('Registro', registro );
    this.dataLocal.abrirRegistro( registro );
  }
  abrirEnlace(geo: string) {
    console.log('Registro', geo );
    this.dataLocal.abrirEnlace(geo)
  }

}
