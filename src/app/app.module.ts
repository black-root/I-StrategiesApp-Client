import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {AngularMaterialModule} from './angular-material.module';
import { RegistrosComponent } from './components/registros/registros.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MantenimientoPersonasComponent } from './components/mantenimiento-personas/mantenimiento-personas.component';
import {LoginService} from './services/login.service';
import {VerifyIsLoggedService} from './services/verifyIsLogged.service';
import {PersonaService} from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrosComponent,
    MantenimientoPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [LoginService, VerifyIsLoggedService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
