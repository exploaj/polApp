import { Component, inject } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { Registro } from '../../models/registro.model';

import { CollectionReference, Firestore, collection, collectionData, getDoc, doc, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface SucursalesProfile {
  nombre: string,
  direccion: string,
  horarios: string,
  ubicacion: string
};

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private firestore: Firestore = inject(Firestore);

  sucursales$: Observable<SucursalesProfile[]>;

  constructor( public dataLocal: DataLocalService ) {
    // get a reference to the user-profile collection
    const sucursalesProfileCollection = collection(this.firestore, 'sucursales');

    // get documents (data) from the collection using collectionData
    this.sucursales$ = collectionData(sucursalesProfileCollection) as Observable<SucursalesProfile[]>;
    
  }

  abrirRegistro( registro: Registro  ) {
    //console.log('Registro', registro );
    this.dataLocal.abrirRegistro( registro );
  }
  abrirEnlace(geo: string) {
    this.dataLocal.abrirEnlace('/tabs/tab3/mapa/',geo)
  }

}

