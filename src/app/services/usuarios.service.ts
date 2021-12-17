import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario';
import Cuentas from '../json/cuentas.json';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  public usuarios: Usuario[] = Cuentas;

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
}