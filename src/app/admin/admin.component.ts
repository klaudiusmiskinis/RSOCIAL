import { Component, HostListener, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../app.component.css']
})

export class AdminComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  public usuarios;
  public servicio;
  public rowSelection = 'single';
  public columnas = [
    {headerName: 'Nombre', field: 'nombre', sortable: true},
    {headerName: 'Apellidos', field: 'apellidos', sortable: true},
    {headerName: 'Correo', field: 'correo', sortable: true},
    {headerName: 'Edad', field: 'edad', sortable: true},
    {headerName: 'Avatar', field: 'avatar', sortable: true},
    {headerName: 'Descripción', field: 'descripcion', sortable: true},
    {headerName: 'Rol', field: 'rol', sortable: true},
    {headerName: 'Amigos', field: 'amigos', sortable: true}
  ]

  public defaultColDef = {
    editable: true,
    resizable: true,
  }

  constructor(usuariosService: UsuariosService) {
    this.servicio = usuariosService;
    this.usuarios = this.servicio.getUsuarios();
  }

  ngOnInit(): void {
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.gridApi.sizeColumnsToFit();
  }
  
  campoCambiando(event) {
    const selectedRows = this.gridApi.getSelectedRows();
    const user = this.servicio.findUsuarioByEmail(selectedRows[0].correo)
  }

  tablaCargada(params) {
    this.gridApi = params.api;
    this.gridApi.setDomLayout('autoHeight');
    this.gridApi.sizeColumnsToFit();
  }
}
