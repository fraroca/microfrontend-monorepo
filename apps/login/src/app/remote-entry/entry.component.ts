import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Componente1Component } from '../componente1.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent,Componente1Component],
  selector: 'ng-mf-login-entry',
  template: `<ng-mf-componente1></ng-mf-componente1><ng-mf-nx-welcome></ng-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
