import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'politica', component: PrivacidadComponent, pathMatch: 'full'},
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(routes);