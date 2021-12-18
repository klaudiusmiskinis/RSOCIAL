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
  public gridColumnas;
  public columnas = [
    {headerName: 'Nombre', field: 'nombre', filter: 'agTextColumnFilter', sortable: true},
    {headerName: 'Apellidos', field: 'apellidos', sortable: true},
    {headerName: 'Correo', field: 'correo', sortable: true},
    {headerName: 'Edad', field: 'edad', sortable: true, width: 60},
    {headerName: 'Avatar', field: 'avatar', sortable: true},
    {headerName: 'Descripción', field: 'descripcion', sortable: true},
    {headerName: 'Rol', field: 'rol', sortable: true, width: 55},
    {headerName: 'Amigos', field: 'amigos', sortable: true}
  ]

  constructor(usuariosService: UsuariosService) {
    this.usuarios = usuariosService.getUsuarios();
  }

  ngOnInit(): void {
  }
}
