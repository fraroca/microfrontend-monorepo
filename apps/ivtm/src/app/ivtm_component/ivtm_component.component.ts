import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button2Component } from '@ng-mf/button2';

@Component({
  selector: 'ng-mf-ivtm-component',
  imports: [CommonModule,Button2Component],
  templateUrl: './ivtm_component.component.html',
  styleUrl: './ivtm_component.component.css',
})
export class IvtmComponentComponentComponent {
  ivtmData: any[] = [
    {
      matricula: '1234ABC',
      marcaModelo: 'Toyota Corolla',
      importe: 120.50,
      periodo: '2023'
    },
    {
      matricula: '5678DEF',
      marcaModelo: 'Ford Focus',
      importe: 95.75,
      periodo: '2023'
    },
    {
      matricula: '9101GHI',
      marcaModelo: 'Volkswagen Golf',
      importe: 110.00,
      periodo: '2023'
    }
  ];
}
