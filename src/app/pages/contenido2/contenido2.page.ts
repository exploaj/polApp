import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Grupo2 } from '../../models/grupo2.model';
import { Firestore, collection, collectionData, getDoc, doc, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Subgrupo2Profile {
  foto: string,
  titulo: string
}

@Component({
  selector: 'app-contenido2',
  templateUrl: './contenido2.page.html',
  styleUrls: ['./contenido2.page.scss'],
})
export class Contenido2Page implements OnInit {
  public grupo2;
  private firestore: Firestore = inject(Firestore);
  public subgrupo2$: Observable<Subgrupo2Profile[]>;

  constructor(private route: ActivatedRoute, public dataLocal: DataLocalService) {
    this.grupo2 = new Grupo2('','','','');
    this.grupo2 = this.dataLocal.grupo2;
    const subgrupo2ProfileCollection = collection(this.firestore, this.grupo2.ruta);
    this.subgrupo2$ = collectionData(subgrupo2ProfileCollection) as Observable<Subgrupo2Profile[]>;  
  }

  ngOnInit() {
    
  }

}
