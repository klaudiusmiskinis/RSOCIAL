import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../class/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})


export class HomeComponent implements OnInit {
  /*ATRIBUTOS*/
  public router: Router;
  public route: ActivatedRoute;
  public usuarios;
  public logged: Usuario;
  public amigos;
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
    this.route = ActivatedRoute
    this.usuarios = UsuariosService;
    this.logged = this.usuarios.findUsuarioByEmail(localStorage.getItem('user'))[0];
    this.amigos = [];
    this.noAgregados = this.usuarios.getNoAgregados(this.logged)
  }

  /*MÉTODOS*/
  ngOnInit() {
    if (!this.logged) this.router.navigate(['login']);
    else {
      this.logged.amigos.forEach(amigo => {
        this.amigos.push(this.usuarios.findUsuarioByEmail(amigo)[0]);
      })
    }
  }

  agregarAmigo(email) {
    let agregado: Boolean = false;
    this.logged.amigos.forEach(amigo => {
      if (amigo !== email) {
        this.logged.amigos.push(email)
        agregado = true;
      }
    })
    if (agregado) {
      this.amigos.push(this.usuarios.findUsuarioByEmail(email)[0])
    }
    this.noAgregados = this.usuarios.getNoAgregados(this.logged)
    this.onSwiper('agregado');
  }

  /* SWIPER */
  public onSwiperEvent(event: string): void {
  }

  public onIndexChange(index: number): void {
  }

  public onSwiper(swiper: string): void {
    
  }
}
