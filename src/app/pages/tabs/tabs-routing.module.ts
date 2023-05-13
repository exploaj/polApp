import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children:[
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'contenido1/:var1',
            loadChildren: () => import('../../pages/contenido1/contenido1.module').then( m => m.Contenido1PageModule)
          }

        ],
        
      },
      {
        path: 'tab2',        
        
        children:[
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'contenido1/:var1',
            loadChildren: () => import('../../pages/contenido1/contenido1.module').then( m => m.Contenido1PageModule)
          },
          {
            path: 'contenido2/',
            loadChildren: () => import('../../pages/contenido2/contenido2.module').then( m => m.Contenido2PageModule)
          }

        ],
      },
      {
        path: 'tab3',
        children:[
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'mapa/:geo',
            loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
          }

        ],
        
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'usuario',
        loadChildren: () => import('../usuario/usuario.module').then( m => m.UsuarioPageModule)
      },
      {
        path: 'promociones',
        loadChildren: () => import('../promociones/promociones.module').then( m => m.PromocionesPageModule)
      },
  {
    path: 'moda',
        children:[
          {
            path: '',
            loadChildren: () => import('../moda/moda.module').then( m => m.ModaPageModule)
          },
          {
            path: 'fotos/',
            loadChildren: () => import('../modafotos/modafotos.module').then( m => m.ModafotosPageModule)
          }

        ],
  }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
