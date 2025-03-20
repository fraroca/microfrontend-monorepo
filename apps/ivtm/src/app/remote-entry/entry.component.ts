import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
//import { IvtmComponentComponentComponent } from '../ivtm_component/ivtm_component.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ng-mf-ivtm-entry',
  template: `<ng-mf-nx-welcome></ng-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
