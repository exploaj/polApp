import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Grupo1 } from '../models/grupo1.model';
import { Grupo2 } from '../models/grupo2.model';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  guardados: Registro[] = [];
  public grupo1;
  public grupo2;

  constructor(
    private navCtrl: NavController
  ) { 
    this.grupo1 = new Grupo1('','','');
    this.grupo2 = new Grupo2('','','','');
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
  abrirEnlace2( dir: string) {
    //this.navCtrl.navigateForward('/tabs/tab2');
    this.navCtrl.navigateForward(`${ dir }`);
  }

  setGrupo1(grupo1: Grupo1 ) {
    this.grupo1 =  grupo1;
  }
  setGrupo2(grupo2: Grupo2 ) {
    this.grupo2 =  grupo2;
  }
}
