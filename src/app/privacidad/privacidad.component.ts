import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html'
})
export class PrivacidadComponent implements OnInit {
  public logged;
  public router;

  constructor(Router: Router) {
    this.router = Router;
    this.logged = localStorage.getItem('user');
  }

  ngOnInit(): void {
    if (!this.logged) return this.router.navigate(['login']);
  }

}
