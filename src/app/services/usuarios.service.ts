import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario';
import Cuentas from '../json/cuentas.json';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  /* Atributos */
  public usuarios: Usuario[];
  public usuariosUser: Usuario[];

  /* Constructor */
  constructor() {
    this.usuarios = Cuentas;
    this.usuariosUser = this.getRolUser();
  }

  /* Métodos */
  /* getUsuarios | Parametros: void */
  getUsuarios(): Usuario[]{
    return this.usuarios;
  }

  /* findUsuarioByEmail | Parametros: email (string) */
  findUsuarioByEmail(email: string): Usuario[] {
    return this.usuarios.filter(usuario => usuario.correo === email);
  }

  /* addUsuario | Parametros: usuario (Usuario) */
  addUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  /* actualizarUsuario | Parametros: usuarioCambiar (Usuario) */
  actualizarUsuario(usuarioCambiar: Usuario): void {
    this.usuarios = this.usuarios.filter(usuario => usuario !== usuarioCambiar);
    this.usuarios.push(usuarioCambiar);
  }

  /* eliminarUsuario | Parametros: usuarioEliminar (Usuario) */
  eliminarUsuario(usuarioEliminar: Usuario): void {
    this.usuarios = this.usuarios.filter(usuario => usuario !== usuarioEliminar);
  }
  
  /* agregarAmigo | Parametros: amigo (string), usuario (string) */
  agregarAmigo(amigo: string, usuario: string): void {
    const logged = this.findUsuarioByEmail(usuario)[0];
    logged.amigos.push(amigo)
    this.actualizarUsuario(logged)
  }

  /* eliminarAmigo | Parametros: amigoEliminar (string), usuario (string) */
  eliminarAmigo(amigoEliminar: string, usuario: string): void {
    const logged = this.findUsuarioByEmail(usuario)[0];
    logged.amigos = logged.amigos.filter(amigo => amigo !== amigoEliminar)
    this.actualizarUsuario(logged);
  }

  /* getRolUser | Parametros: void */
  getRolUser(): Usuario[]{
    const rolUser: Usuario[] = [];
    this.usuarios.forEach(usuario => {
      if (usuario.rol == 'user') {
        rolUser.push(usuario);
      }
    })
    return rolUser;
  }

  /* getNoAgregados | Parametros: usuariosLogged (Usuario) */
  getNoAgregados(usuarioLogged: Usuario): Usuario[] {
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