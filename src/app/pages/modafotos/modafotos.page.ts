import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from 'src/app/services/data-local.service';

import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface fotosProfile {
  foto: string
}
@Component({
  selector: 'app-modafotos',
  templateUrl: './modafotos.page.html',
  styleUrls: ['./modafotos.page.scss'],
})
export class ModafotosPage implements OnInit {

  private firestore: Firestore = inject(Firestore);
  fotos$: Observable<fotosProfile[]>;
  constructor(private route: ActivatedRoute, public dataLocal: DataLocalService) {
    const subgrupoProfileCollection = collection(this.firestore, this.dataLocal.globalModa.ruta);
    this.fotos$ = collectionData(subgrupoProfileCollection) as Observable<fotosProfile[]>;
  }

  ngOnInit() {
  }

}
