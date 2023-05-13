import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataLocalService } from '../../services/data-local.service';

interface ModaProfile {
  foto: string,
  titulo: string,
  detalle: string,
  ruta: string
}
@Component({
  selector: 'app-moda',
  templateUrl: './moda.page.html',
  styleUrls: ['./moda.page.scss'],
})
export class ModaPage{
  private firestore: Firestore = inject(Firestore);
  moda$: Observable<ModaProfile[]>;

  constructor(public dataLocal: DataLocalService) { 
    const serviciosProfileCollection = collection(this.firestore, 'moda');
    this.moda$ = collectionData(serviciosProfileCollection) as Observable<ModaProfile[]>;
  }

  abrirEnlace(var1: any) {
    this.dataLocal.setGlobalModa(var1);
    this.dataLocal.abrirEnlace2('/tabs/moda/fotos/')
  }

}
