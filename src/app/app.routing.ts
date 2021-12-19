import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'politica', component: PrivacidadComponent, pathMatch: 'full'},
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'perfil', component: PerfilComponent, pathMatch: 'full'},
    { path: 'admin', component: AdminComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(routes);