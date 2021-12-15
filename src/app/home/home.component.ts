import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import SwiperCore from 'swiper';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})


export class HomeComponent implements OnInit {
  public router;
  public route;
  public usuarios;
  public logged;

  constructor(Router: Router, ActivatedRoute: ActivatedRoute, UsuariosService: UsuariosService) {
    this.router = Router;
    this.route = ActivatedRoute
    this.usuarios = UsuariosService;
    this.logged = localStorage.getItem('user');
  }

  ngOnInit(): void {
    if (!this.logged) return this.router.navigate(['login']);
    this.logged = this.usuarios.usuarios.filter(usuario => usuario.correo === this.logged);
    this.logged = this.logged[0];
  }


}
