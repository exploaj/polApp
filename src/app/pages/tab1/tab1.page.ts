import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { DataLocalService } from '../../services/data-local.service';

interface ServiciosProfile {
  foto: string,
  titulo: string
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private firestore: Firestore = inject(Firestore);
  servicios$: Observable<ServiciosProfile[]>;

  constructor(public dataLocal: DataLocalService) {
    const serviciosProfileCollection = collection(this.firestore, 'servicios');
    this.servicios$ = collectionData(serviciosProfileCollection) as Observable<ServiciosProfile[]>;
  }

  abrirEnlace(var1: any) {
    this.dataLocal.setGrupo1(var1);
    this.dataLocal.abrirEnlace2('/tabs/tab2/contenido1/',var1)
  }

}
