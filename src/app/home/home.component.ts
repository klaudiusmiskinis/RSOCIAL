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
  public router: Router;
  public route: ActivatedRoute;
  public usuarios;
  public logged: Usuario;
  public amigos;
  public disabled: boolean = false;
  public show: boolean = true;
  public type: string = 'component';
  public config: SwiperOptions = {
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

  constructor(Router: Router, ActivatedRoute: ActivatedRoute, UsuariosService: UsuariosService) {
    this.router = Router;
    this.route = ActivatedRoute
    this.usuarios = UsuariosService;
    this.logged = this.usuarios.findUsuarioByEmail(localStorage.getItem('user'))[0];
  }

  ngOnInit() {
    if (!this.logged) this.router.navigate(['login']);
    else {
      this.logged.amigos.forEach(amigo => {
        this.amigos.push(this.usuarios.findUsuarioByEmail(amigo)[0]);
      })
    }
  }

  public onSwiperEvent(event: string): void {
    
  }

  public onIndexChange(index: number): void {
  }

}
