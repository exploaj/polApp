import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Grupo1 } from '../models/grupo1.model';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  guardados: Registro[] = [];
  public grupo1;

  constructor(
    private navCtrl: NavController
  ) { 
    this.grupo1 = new Grupo1('','','');
  }
  abrirRegistro( registro: Registro ) {

    this.navCtrl.navigateForward('/tabs/tab2');

    switch ( registro.type ) {

      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${ registro.text }`);
      break;

    }
  }

  abrirEnlace( dir: string, geo: string) {
    //this.navCtrl.navigateForward('/tabs/tab2');
    this.navCtrl.navigateForward(`${ dir }${ geo }`);
  }
  abrirEnlace2( dir: string, geo: Array<any>) {
    //this.navCtrl.navigateForward('/tabs/tab2');
    this.navCtrl.navigateForward(`${ dir }${ geo }`);
  }

  setGrupo1(grupo1: Grupo1 ) {
    this.grupo1 =  grupo1;
  }
}
