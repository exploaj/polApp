import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Grupo1 } from '../../models/grupo1.model';

import { Firestore, collection, collectionData, getDoc, doc, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface SubgrupoProfile {
  foto: string,
  titulo: string,
  detalle: string,
  ruta: string
}

interface Subgrupo2Profile {
  foto: string,
  titulo: string
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
  public subgrupo2$: Observable<Subgrupo2Profile[]>;
  

  constructor(private route: ActivatedRoute, public dataLocal: DataLocalService) {
    this.grupo1 = new Grupo1('','','');
    this.grupo1 = this.dataLocal.grupo1;
    const subgrupoProfileCollection = collection(this.firestore, this.grupo1.grupo);
    this.subgrupo$ = collectionData(subgrupoProfileCollection) as Observable<SubgrupoProfile[]>;
    this.subgrupo2$ = collectionData(subgrupoProfileCollection) as Observable<SubgrupoProfile[]>;
    
    this.subgrupo$.subscribe((res)=>{
      res.map((t) => {
        //console.log(t)
        const subgrupo2ProfileCollection = collection(this.firestore, t.ruta);
        this.subgrupo2$ = collectionData(subgrupo2ProfileCollection) as Observable<Subgrupo2Profile[]>;    
      });
    });

  }

  ngOnInit() {
    let var1: any = this.route.snapshot.paramMap.get('var1');
    
    
    
  }

}
