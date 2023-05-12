import { Component, OnInit,inject } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataLocalService } from '../../services/data-local.service';

interface PromocionesProfile {
  detalle: string,
  titulo: string,
  foto: string
}

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {
  private firestore: Firestore = inject(Firestore);
  promociones$: Observable<PromocionesProfile[]>;

  constructor(public dataLocal: DataLocalService) {
    const promocionesProfileCollection = collection(this.firestore, 'promociones');
    this.promociones$ = collectionData(promocionesProfileCollection) as Observable<PromocionesProfile[]>;
  }

  ngOnInit() {
  }

}
