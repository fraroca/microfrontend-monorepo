import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '@ng-mf/buttons';

@Component({
  selector: 'ng-mf-componente1',
  standalone : true,
  imports: [CommonModule,ButtonsComponent],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.scss',
})
export class Componente1Component {
  // Datos de ejemplo del IAE
  iaeData = [
    {
      codigo: '001',
      actividad: 'Comercio al por menor',
      baseImponible: 15000,
      cuota: 300,
    },
    {
      codigo: '002',
      actividad: 'Restaurantes',
      baseImponible: 25000,
      cuota: 500,
    },
    {
      codigo: '003',
      actividad: 'Transporte de mercancías',
      baseImponible: 40000,
      cuota: 800,
    },
    {
      codigo: '004',
      actividad: 'Servicios de consultoría',
      baseImponible: 30000,
      cuota: 600,
    },
  ];


}
