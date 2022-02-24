import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservaUserComponent } from './reserva-user/reserva-user.component';
import { GuiaComponent } from './guia/guia.component';
import { CotopaxiComponent } from './cotopaxi/cotopaxi.component';

const routes: Routes = [
{
  path:'login',
  component: LoginComponent
},

{
  path: 'user',
  component: UsuarioComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'reserva',
  component:ReservaUserComponent
},
{
  path: 'guia',
  component:GuiaComponent
},
{
  path: 'cotopaxi',
  component:CotopaxiComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents=[]