import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../models/perfil.model';
import { DataLocalService } from '../../services/data-local.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  public registro;

  constructor(public dataLocal: DataLocalService) {
    this.registro = new Perfil('','','','','','')
  }

  ngOnInit() {
    setTimeout(()=>{
      this.registro = this.dataLocal.registroPerfil;
    },500)
  }
  guardarPerfil(){
    this.registro.fecha = '2023-05-01T13:47:20.789';
    const datetimeValue = document.querySelector('#date');
    console.log(datetimeValue?.nodeValue);
    this.dataLocal.guardarPerfil(this.registro);
    this.registro = this.dataLocal.registroPerfil;
  }

  setDate() {
    console.log('aqui');
  }

}
