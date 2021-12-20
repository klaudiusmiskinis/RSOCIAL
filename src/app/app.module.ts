/* IMPORTANDO LIBRERIAS DE ANGULAR */
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF }       from '@angular/common';
import { BrowserModule }       from '@angular/platform-browser';
import { SwiperModule }        from 'ngx-swiper-wrapper';
import { AgGridModule }        from 'ag-grid-angular';
import { FormsModule }         from '@angular/forms';
import { NgModule }            from '@angular/core';
import { Routing }             from './app.routing';


/* IMPORTANDO COMPONENTES */
import { PanelLateralPerfilComponent } from './panel-lateral-perfil/panel-lateral-perfil.component';
import { BackgroundComponent }         from './background/background.component';
import { PrivacidadComponent }         from './privacidad/privacidad.component';
import { RegisterComponent }           from './register/register.component';
import { PerfilComponent }             from './perfil/perfil.component';
import { NavbarComponent }             from './navbar/navbar.component';
import { LoginComponent }              from './login/login.component';
import { AdminComponent }              from './admin/admin.component';
import { HomeComponent }               from './home/home.component';
import { AppComponent }                from './app.component';


@NgModule({
  declarations: [
    PanelLateralPerfilComponent,
    BackgroundComponent,
    PrivacidadComponent,
    RegisterComponent,
    PerfilComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    AppComponent,
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
