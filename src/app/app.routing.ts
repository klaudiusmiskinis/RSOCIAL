import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: "", component: AppComponent, pathMatch: "full" },
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: "register", component: RegisterComponent, pathMatch: "full" },

    // REDIRECCIÓN AL HOME SI NO SON LAS RUTAS DE ARRIBA.
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(routes);