import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Grupo1 } from '../models/grupo1.model';
import { Grupo2 } from '../models/grupo2.model';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Perfil } from '../models/perfil.model';
@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  guardados: Registro[] = [];
  public registroPerfil;
  public grupo1;
  public grupo2;
  private _storage: Storage | null = null;

  constructor(
    private navCtrl: NavController,
    private storage: Storage
  ) { 
    this.init();
    this.grupo1 = new Grupo1('','','');
    this.grupo2 = new Grupo2('','','','');
    this.registroPerfil = new Perfil('','','','','','');
    this.perfil();

  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }
  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
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

  async perfil() {
    const registroPerfil = await this.storage.get('perfil');
    this.registroPerfil = registroPerfil || [];
    console.log('aqui',this.registroPerfil);
    return this.registroPerfil;
  }

  guardarPerfil(perfil: Perfil){
    this.registroPerfil = perfil;
    //console.log(this.registroPerfil);
    this.storage.set('perfil', this.registroPerfil);
    this.perfil();
  }
}
