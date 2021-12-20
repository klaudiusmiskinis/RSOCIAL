import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../class/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit {
  /*ATRIBUTOS*/
  public router: Router;
  public route: ActivatedRoute;
  public usuarios: Usuario[];
  public logged: Usuario;
  public servicio;
  public duracion: number;
  public amigos: Usuario[];
  public noAgregados: Usuario[];
  public disabled: boolean = false;
  public configUno: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false,
    autoplay: {
      delay: 3000,
    }
  };
  public configDos: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false,
    autoplay: {
      delay: 3000,
    }
  };

  /*CONSTRUCTOR*/
  constructor(Router: Router, ActivatedRoute: ActivatedRoute, UsuariosService: UsuariosService) {
    this.router = Router;
    if (!localStorage.getItem('user')) this.router.navigate(['/login']);
    this.route = ActivatedRoute
    this.servicio = UsuariosService;
    this.logged = this.servicio.findUsuarioByEmail(localStorage.getItem('user'))[0];
    this.usuarios = this.servicio.getUsuarios();
    this.noAgregados = this.servicio.getNoAgregados(this.logged)
    this.amigos = [];
  }

  /*MÉTODOS*/
  ngOnInit() {
    this.logged.amigos.forEach(amigo => {
      this.amigos.push(this.servicio.findUsuarioByEmail(amigo)[0]);
    })
  }

  public agregarAmigo(email) {
    this.servicio.agregarAmigo(email, this.logged.correo)
    this.logged = this.servicio.findUsuarioByEmail(this.logged.correo)[0]
    this.noAgregados = this.servicio.getNoAgregados(this.logged)
    this.swiperAmigos();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/home']);
    });
  }

  public eliminarAmigo(email) {
    this.servicio.eliminarAmigo(email, this.logged.correo)
    this.logged = this.servicio.findUsuarioByEmail(this.logged.correo)[0]
    this.noAgregados = this.servicio.getNoAgregados(this.logged)
    this.swiperAmigos();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/home']);
    });
  }

  public swiperAmigos() {
    this.amigos = []
    this.logged.amigos.forEach(amigo => {
      this.amigos.push(this.servicio.findUsuarioByEmail(amigo)[0]);
    })
  }
}
