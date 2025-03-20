import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [NxWelcomeComponent, RouterModule,CommonModule],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{
  title = 'dashboard';
  datosIaeShared : any;
  datosIbiShared : any;
  datosIvtmShared : any;

  selectedTab = 'IAE'; // Pestaña seleccionada por defecto

  // Método para cambiar la pestaña seleccionada
  async selectTab(tab: string) {
    this.selectedTab = tab;
    if (this.selectedTab == "IAE"){
      const m = await import('login/Componente1Shared');
      this.datosIaeShared = m.Componente1Component;
    }else if (this.selectedTab == "IBI"){
      const z = await import('ibi/ComponenteIbiShared');
      this.datosIbiShared = z.IbiComponentComponent;
    }else if (this.selectedTab == "IVTM"){
      const x = await import('ivtm/ComponenteIvtmShared');
      this.datosIvtmShared = x.IvtmComponentComponentComponent;
    }
  }

  /*ngOnInit() {
    

    

    const s = await import('ibi/ComponenteIbiShared');
    this.datosIbiShared = s.ComponenteIbiComponentComponent;*/
    //this.datosIaeComponent = m.DatosIaeComponent;
    /*const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4206/remoteEntry.js',
      exposedModule: './DatosIaeSharedComponent',
    });
    this.datosIaeShared = m.DatosIaeComponent;
  }*/

  
}
