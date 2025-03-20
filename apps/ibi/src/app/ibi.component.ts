import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '@ng-mf/buttons';
import { Button2Component } from '@ng-mf/button2';
@Component({
  selector: 'ng-mf-ibi-component',
  standalone:true,
  imports: [CommonModule,ButtonsComponent,Button2Component],
  templateUrl: './ibi.component.html',
  styleUrl: './ibi.component.scss',
})
export class IbiComponentComponent {

  ibiData = [
    {
      referenciaCatastral: '123456789',
      direccion: 'Calle Falsa 123',
      importe: 350.50,
      periodo: '2023'
    },
    {
      referenciaCatastral: '987654321',
      direccion: 'Avenida Real 456',
      importe: 420.75,
      periodo: '2023'
    },
    {
      referenciaCatastral: '456789123',
      direccion: 'Plaza Mayor 789',
      importe: 300.00,
      periodo: '2023'
    }
  ];
}
