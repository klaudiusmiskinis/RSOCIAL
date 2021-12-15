/* IMPORTANDO LIBRERIAS DE ANGULAR */
import { Routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';

/* IMPORTANDO COMPONENTES */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PanelLateralPerfilComponent } from './panel-lateral-perfil/panel-lateral-perfil.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BackgroundComponent,
    HomeComponent,
    PrivacidadComponent,
    PerfilComponent,
    PanelLateralPerfilComponent,
    NavbarComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    SwiperModule,
    FormsModule,
    Routing,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
