import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularModuleSignUpRoutingModule } from './angular-module-sign-up-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AngularModuleSignUpRoutingModule
  ],
  exports: [
    SignUpComponent,
  ]
})
export class AngularModuleSignUpModule { }
