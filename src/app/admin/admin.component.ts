import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../app.component.css']
})

export class AdminComponent implements OnInit {
  public usuarios;

  constructor(usuariosService: UsuariosService) {
    this.usuarios = usuariosService.getUsuarios();
  }

  ngOnInit(): void {
    
  }

}
