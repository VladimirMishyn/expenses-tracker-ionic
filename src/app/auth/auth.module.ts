import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthPageComponent, LoginComponent, SignInComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, AuthRoutingModule],
})
export class AuthModule {}
