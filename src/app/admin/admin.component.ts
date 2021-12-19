import { Component, HostListener, ViewChild } from '@angular/core';
import { Usuario } from '../class/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent {
  /* Métodos */
  public gridApi;
  public gridColumnApi;
  public defaultColDef
  public rowSelection;
  public seleccionado;
  public usuarios;
  public servicio;
  public columnas;

  /* Constructor */
  constructor(usuariosService: UsuariosService) {
    this.servicio = usuariosService;
    this.usuarios = this.servicio.getUsuarios();
    this.rowSelection = 'single';
    this.columnas = [
      {headerName: 'Nombre', field: 'nombre', sortable: true},
      {headerName: 'Apellidos', field: 'apellidos', sortable: true},
      {headerName: 'Correo', field: 'correo', sortable: true},
      {headerName: 'Edad', field: 'edad', sortable: true},
      {headerName: 'Avatar', field: 'avatar', sortable: true},
      {headerName: 'Descripción', field: 'descripcion', sortable: true},
      {headerName: 'Rol', field: 'rol', sortable: true},
      {headerName: 'Amigos', field: 'amigos', sortable: true}
    ]
    this.defaultColDef = {
      editable: true,
      resizable: true,
    }
  }

  /* Métodos */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.columnaMovida(event);
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

  seleccionarFila(event): void {
    const selectedRows = this.gridApi.getSelectedRows();
    this.seleccionado = {
      nombre: selectedRows[0].nombre + ' ' + selectedRows[0].apellidos,
      correo: selectedRows[0].correo
    }
  }

  eliminarFila(): void {
    if (this.seleccionado.correo) {
      this.servicio.eliminarUsuario(this.servicio.findUsuarioByEmail(this.seleccionado.correo)[0]);
      this.usuarios = this.servicio.getUsuarios();
    }
  }

  tablaCargada(params): void {
    this.gridApi = params.api;
    this.gridApi.setDomLayout('autoHeight');
    this.gridApi.sizeColumnsToFit();
  }

  columnaMovida(event): void {
    this.gridApi.sizeColumnsToFit();
  }
}
