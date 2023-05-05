import { Component, inject } from '@angular/core';
import { CollectionReference, Firestore, collection, collectionData, getDoc, doc, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface ServiciosProfile {
  foto: string,
  titulo: string,
  grupo: string,
  cortes: {
    detalle: string
    foto: string,
    titulo: string
  }
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private firestore: Firestore = inject(Firestore);
  servicios$: Observable<ServiciosProfile[]>;

  constructor() {
    const serviciosProfileCollection = collection(this.firestore, 'servicios');
    this.servicios$ = collectionData(serviciosProfileCollection) as Observable<ServiciosProfile[]>;
    const servicios2 = collection(this.firestore, '/servicios/166XyboxLuhDWoHrcRtE/cortes/4MGQq8F3RnWEIy4rIeen/fotos');
    collectionData(servicios2).subscribe((r)=> {
      console.log(r);
    });
  }

}
