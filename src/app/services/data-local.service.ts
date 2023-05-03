import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  guardados: Registro[] = [];

  constructor(
    private navCtrl: NavController
  ) { }
  abrirRegistro( registro: Registro ) {

    this.navCtrl.navigateForward('/tabs/tab2');

    switch ( registro.type ) {

      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${ registro.text }`);
      break;

    }
  }

  abrirEnlace( geo: string) {
    //this.navCtrl.navigateForward('/tabs/tab2');
    this.navCtrl.navigateForward(`/tabs/tab3/mapa/${ geo }`);
  }
}
