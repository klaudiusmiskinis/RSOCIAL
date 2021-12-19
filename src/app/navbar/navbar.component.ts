import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  /* Atributos */
  public router;

  /* Constructor */
  constructor(Router: Router) {
    this.router = Router;
  }

  /* Métodos */
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
