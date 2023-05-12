import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../models/perfil.model';
import { DataLocalService } from '../../services/data-local.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  public registro;

  constructor(public dataLocal: DataLocalService, private alertController: AlertController) {
    this.registro = new Perfil('','','','','','')
  }

  ngOnInit() {
    setTimeout(()=>{
      this.registro = this.dataLocal.registroPerfil;
      (document.getElementById('date') as any).value=this.registro.fecha+'T01:01:01.789';
    },1000)
  }

  guardarPerfil(){
    this.dataLocal.guardarPerfil(this.registro);
    this.registro = this.dataLocal.registroPerfil;

    this.presentAlert();
  }

  setDate() {
    let fecha= (document.getElementById('date') as any).value;
    let fe = fecha.split('T');
    this.registro.fecha = fe[0];
    (document.getElementById('date') as any).value=this.registro.fecha+'T01:01:01.789';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Datos guardados',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
