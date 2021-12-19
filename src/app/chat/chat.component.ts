import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  public usuarios;
  public servicio;
  public logged;
  public router;

  constructor(usuariosService: UsuariosService, router: Router) { 
    this.servicio = usuariosService;
    this.router = router;
    this.usuarios = this.servicio.getUsuarios();
    this.logged = this.servicio.findUsuarioByEmail(localStorage.getItem('user'))[0];
  }

  ngOnInit(): void {
    if (!this.logged) this.router.navigate(['login']);
  }

}
