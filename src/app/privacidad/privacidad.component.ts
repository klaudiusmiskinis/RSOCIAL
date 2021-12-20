import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html'
})

export class PrivacidadComponent implements OnInit {
  /* Atributos */
  public logged;
  public router;
  
  /* Constructor */
  constructor(Router: Router) {
    this.router = Router;
    this.logged = localStorage.getItem('user');
  }

  /* Métodos */
  ngOnInit(): void {
    if (!this.logged) return this.router.navigate(['login']);
  }

}
