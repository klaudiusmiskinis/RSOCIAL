import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-lateral-perfil',
  templateUrl: './panel-lateral-perfil.component.html'
})

export class PanelLateralPerfilComponent {
  /* Atributos */
  public router;
  public logged;
  private usuarios;

  /* Constructor */
  constructor(Router: Router, usuariosService: UsuariosService) {
    this.router = Router;
    this.usuarios = usuariosService;
    this.logged = this.usuarios.findUsuarioByEmail(localStorage.getItem('user'))[0]
  }

  /* Métodos */
  /* logout | Parametros: void */
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
