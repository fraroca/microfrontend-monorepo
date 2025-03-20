import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { IbiComponentComponent } from '../ibi.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent,IbiComponentComponent],
  selector: 'ng-mf-ibi-entry',
  template: `<ng-mf-ibi-component></ng-mf-ibi-component><ng-mf-nx-welcome></ng-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
