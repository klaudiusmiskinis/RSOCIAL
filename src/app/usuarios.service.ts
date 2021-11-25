import { Injectable } from '@angular/core';
import { Usuario } from './class/usuario';
import Cuentas from './json/cuentas.json';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  public usuarios: Usuario[] = Cuentas;
  
  addUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario)
  }

  getUsuarios(): Usuario[]{
    return this.usuarios;
  }
}