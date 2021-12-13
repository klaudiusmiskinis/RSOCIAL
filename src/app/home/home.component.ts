import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
declare var jQuery:any, $:any;

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
    this.logged = this.getParametros();
  }

  ngOnInit(): void {
    if (!this.logged) return this.router.navigate(['login']);
    this.logged = this.usuarios.usuarios.filter(usuario => usuario.correo === this.logged);
    this.logged = this.logged[0]
    $('#lateral-perfil').toggleClass('hide');
    // window.history.replaceState({}, document.title, "/home");
  }

  getParametros() {
   return this.route.params._value.usuario
  }
}
