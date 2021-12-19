import { Component, HostListener } from '@angular/core';
import { Usuario } from '../class/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../app.component.css']
})

export class AdminComponent {
  /* Métodos */
  public gridApi;
  public gridColumnApi;
  public usuarios;
  public servicio;
  public rowSelection = 'single';
  public seleccionado;
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

  /* Métodos */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.gridApi.sizeColumnsToFit();
  }
  
  campoCambiando(event) {
    const selectedRows = this.gridApi.getSelectedRows();
    this.seleccionado = {
      nombre: selectedRows[0].nombre + ' ' + selectedRows[0].apellidos,
      correo: selectedRows[0].correo
    }
    const usuarioCambiar: Usuario = event.data;
    this.servicio.actualizarUsuario(usuarioCambiar);
    this.usuarios = this.servicio.getUsuarios();
  }

  onSelectionChanged(event) {
    const selectedRows = this.gridApi.getSelectedRows();
    this.seleccionado = {
      nombre: selectedRows[0].nombre + ' ' + selectedRows[0].apellidos,
      correo: selectedRows[0].correo
    }
  }

  eliminarRow() {
    if (this.seleccionado.correo) {
      this.servicio.eliminarUsuario(this.servicio.findUsuarioByEmail(this.seleccionado.correo)[0]);
      this.usuarios = this.servicio.getUsuarios();
    }
  }

  tablaCargada(params) {
    this.gridApi = params.api;
    this.gridApi.setDomLayout('autoHeight');
    this.gridApi.sizeColumnsToFit();
  }
}
