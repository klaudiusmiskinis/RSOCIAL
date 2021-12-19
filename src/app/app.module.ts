/* IMPORTANDO LIBRERIAS DE ANGULAR */
import { Routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AgGridModule } from 'ag-grid-angular';

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
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';

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
    AdminComponent,
    ChatComponent,
  ],
  imports: [
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    BrowserModule,
    SwiperModule,
    FormsModule,
    Routing,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
