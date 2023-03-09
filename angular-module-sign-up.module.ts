import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularModuleSignUpRoutingModule } from './angular-module-sign-up-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AngularModuleSignUpRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,

    ReactiveFormsModule,
  ],
  exports: [
    SignUpComponent,
  ]
})
export class AngularModuleSignUpModule { }
