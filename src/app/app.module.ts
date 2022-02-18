import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';
import { HeaderUserComponent} from './header-user/header-user.component';
import  {CardComponent}from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GuiaComponent } from './guia/guia.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    AdminComponent,
    RegistroComponent,
    HeaderUserComponent,
    CardComponent,
    FooterComponent,
    GuiaComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
