import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../app.component.css']
})

export class AdminComponent implements OnInit {
  public usuarios;
  public columnas: ColDef[] = [
    {headerName: 'Nombre', field: 'nombre'},
    {headerName: 'Apellidos', field: 'apellidos'},
    {headerName: 'Correo', field: 'correo'},
    {headerName: 'Edad', field: 'edad'},
    {headerName: 'Avatar', field: 'avatar'},
    {headerName: 'Password', field: 'password'},
    {headerName: 'Descripción', field: 'descripcion'},
    {headerName: 'Rol', field: 'rol'},
    {headerName: 'Amigos', field: 'amigos'},
  ]
  
  constructor(usuariosService: UsuariosService) {
    this.usuarios = usuariosService.getUsuarios();
  }

  ngOnInit(): void {

  }
}
