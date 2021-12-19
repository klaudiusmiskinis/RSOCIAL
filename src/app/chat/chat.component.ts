import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  public usuarios;
  public servicio;
  public logged;

  constructor(UsuariosService: UsuariosService) { 
    this.servicio = UsuariosService;
    this.usuarios = this.servicio.getUsuarios();
    this.logged = this.servicio.findUsuarioByEmail(localStorage.getItem('user'))[0];
  }

  ngOnInit(): void {
    
  }

}
