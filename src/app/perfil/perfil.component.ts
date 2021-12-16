import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['../app.component.css']
})

export class PerfilComponent implements OnInit {
  public router;
  public logged;
  private usuarios;

  constructor(Router: Router, usuariosService: UsuariosService) {
    this.router = Router;
    this.usuarios = usuariosService;
    this.logged = this.usuarios.findUsuarioByEmail(localStorage.getItem('user'))[0]
  }

  ngOnInit(): void {
    if (!this.logged) return this.router.navigate(['login']);
  
  }

  actualizar() {
    console.log()
  }

}
