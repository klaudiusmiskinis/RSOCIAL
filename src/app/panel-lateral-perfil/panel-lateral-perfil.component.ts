import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-panel-lateral-perfil',
  templateUrl: './panel-lateral-perfil.component.html',
  styleUrls: ['../app.component.css']
})
export class PanelLateralPerfilComponent implements OnInit {
  public router;
  public logged;
  private usuarios;

  constructor(Router: Router, usuariosService: UsuariosService) {
    this.router = Router;
    this.usuarios = usuariosService;
    this.logged = this.usuarios.findUsuarioByEmail(localStorage.getItem('user'))[0]
  }

  ngOnInit(): void {

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
