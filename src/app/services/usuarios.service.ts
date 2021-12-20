import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario';
import Cuentas from '../json/cuentas.json';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  public usuarios: Usuario[];
  public usuariosUser: Usuario[];

  constructor() {
    this.usuarios = Cuentas;
    this.usuariosUser = this.getRolUser();
  }

  getUsuarios(): Usuario[]{
    return this.usuarios;
  }

  findUsuarioByEmail(email: string): Usuario[] {
    return this.usuarios.filter(usuario => usuario.correo === email);
  }

  addUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario)
  }

  actualizarUsuario(usuarioCambiar: Usuario) {
    this.usuarios = this.usuarios.filter(usuario => usuario !== usuarioCambiar);
    this.usuarios.push(usuarioCambiar)
  }

  eliminarUsuario(usuarioEliminar: Usuario) {
    this.usuarios = this.usuarios.filter(usuario => usuario !== usuarioEliminar);
  }
  
  agregarAmigo(amigo, usuario) {
    const logged = this.findUsuarioByEmail(usuario)[0]
    logged.amigos.push(amigo)
    this.actualizarUsuario(logged)
  }

  eliminarAmigo(amigoEliminar, usuario) {
    const logged = this.findUsuarioByEmail(usuario)[0]
    logged.amigos = logged.amigos.filter(amigo => amigo !== amigoEliminar)
    this.actualizarUsuario(logged);
  }

  getRolUser(){
    const rolUser: Usuario[] = [];
    this.usuarios.forEach(usuario => {
      if (usuario.rol == 'user') {
        rolUser.push(usuario);
      }
    })
    return rolUser;
  }

  getNoAgregados(usuarioLogged) {
    const noAgregados: Usuario[] = []
    this.usuarios.forEach(usuario => {
      if (usuario.correo !== usuarioLogged.correo && usuario.rol == usuarioLogged.rol) {
        if (!usuarioLogged.amigos.includes(usuario.correo)) {
          noAgregados.push(usuario)
        }
      }
    })
    return noAgregados;
  }
}