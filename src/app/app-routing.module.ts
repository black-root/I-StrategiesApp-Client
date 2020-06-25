import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrosComponent} from './components/registros/registros.component';
import {MantenimientoPersonasComponent} from './components/mantenimiento-personas/mantenimiento-personas.component';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'mantenimiento', component: MantenimientoPersonasComponent, canActivate: [AuthGuard]},
  {path: 'registros', component: RegistrosComponent,  canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
