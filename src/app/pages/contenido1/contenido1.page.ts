import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Grupo1 } from '../../models/grupo1.model';

import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface SubgrupoProfile {
  foto: string,
  titulo: string,
  detalle: string,
  ruta: string
}

@Component({
  selector: 'app-contenido1',
  templateUrl: './contenido1.page.html',
  styleUrls: ['./contenido1.page.scss'],
})
export class Contenido1Page implements OnInit {
  public grupo1;
  oculto = 150;
  private firestore: Firestore = inject(Firestore);
  subgrupo$: Observable<SubgrupoProfile[]>;
  
  constructor(private route: ActivatedRoute, public dataLocal: DataLocalService) {
    this.grupo1 = new Grupo1('','','');
    this.grupo1 = this.dataLocal.grupo1;
    const subgrupoProfileCollection = collection(this.firestore, this.grupo1.grupo);
    this.subgrupo$ = collectionData(subgrupoProfileCollection) as Observable<SubgrupoProfile[]>;
  }

  ngOnInit() {
  }

  abrirEnlace(var1: any) {
    this.dataLocal.setGrupo2(var1);
    this.dataLocal.abrirEnlace2('/tabs/tab2/contenido2/');
  }

}
