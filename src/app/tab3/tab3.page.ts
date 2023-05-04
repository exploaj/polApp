import { Component, inject } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Registro } from '../models/registro.model';

import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface SucursalesProfile {
  nombre: string,
  direccion: string,
  horarios: string,
  ubicacion: string
};
interface ServiciosProfile {
  otro: string,
  cortes: {
    detalle: string
    foto: string,
    titulo: string
  }
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private firestore: Firestore = inject(Firestore);

  sucursales$: Observable<SucursalesProfile[]>;
  servicios$: Observable<ServiciosProfile[]>;

  constructor( public dataLocal: DataLocalService ) {
    // get a reference to the user-profile collection
    const sucursalesProfileCollection = collection(this.firestore, 'sucursales');
    const serviciosProfileCollection = collection(this.firestore, 'servicios');

    // get documents (data) from the collection using collectionData
    this.sucursales$ = collectionData(sucursalesProfileCollection) as Observable<SucursalesProfile[]>;
    this.servicios$ = collectionData(serviciosProfileCollection) as Observable<ServiciosProfile[]>;
    console.log(this.sucursales$);
    console.log(this.servicios$);

    const servicios = collection(this.firestore, 'servicios');
    collectionData(serviciosProfileCollection).subscribe((r)=> {
      console.log(r);
    });
  }

  abrirRegistro( registro: Registro  ) {
    //console.log('Registro', registro );
    this.dataLocal.abrirRegistro( registro );
  }
  abrirEnlace(geo: string) {
    this.dataLocal.abrirEnlace(geo)
  }

}

