import { Component, HostListener } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../class/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent {
  /* Métodos */
  public gridColumnApi;
  public defaultColDef
  public rowSelection;
  public seleccionado;
  public usuarios;
  public servicio;
  public columnas;
  public gridApi;
  public router;
  public logged;
  public stats;

  /* Constructor */
  constructor(usuariosService: UsuariosService, router: Router) {
    this.servicio = usuariosService;
    this.router = router;
    this.usuarios = this.servicio.getUsuarios();
    this.logged = this.servicio.findUsuarioByEmail(localStorage.getItem('user'))[0];
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
  ngOnInit(){
    if (!this.logged) this.router.navigate(['login']);
    let contadorUser = 0;
    let contadorAdmin = 0;
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].rol == 'user'){
        contadorUser++;
      } else if (this.usuarios[i].rol == 'admin') {
        contadorAdmin++;
      }
    }
    this.stats = {
      users: contadorUser,
      admins: contadorAdmin
    }
  }

  /* EventListener Resize */
  @HostListener('window:resize', ['$event'])
  /* onResize */
  onResize(event): void  {
    this.columnaMovida(event);
  }
  
  /* campoCambiar | Parametros: evento (obj) */
  campoCambiando(event): void {
    const selectedRows = this.gridApi.getSelectedRows();
    this.seleccionado = {
      nombre: selectedRows[0].nombre + ' ' + selectedRows[0].apellidos,
      correo: selectedRows[0].correo
    }
    const usuarioCambiar: Usuario = event.data;
    this.servicio.actualizarUsuario(usuarioCambiar);
    this.usuarios = this.servicio.getUsuarios();
  }

  /* seleccionarFila | Parametros: evento (obj) */
  seleccionarFila(event): void {
    const selectedRows = this.gridApi.getSelectedRows();
    this.seleccionado = {
      nombre: selectedRows[0].nombre + ' ' + selectedRows[0].apellidos,
      correo: selectedRows[0].correo
    }
  }

  /* eliminarFila | Parametros: void */
  eliminarFila(): void {
    if (this.seleccionado.correo) {
      this.servicio.eliminarUsuario(this.servicio.findUsuarioByEmail(this.seleccionado.correo)[0]);
      this.usuarios = this.servicio.getUsuarios();
    }
  }

  /* tablaCargada | Parametros: params (obj) */
  tablaCargada(params): void {
    this.gridApi = params.api;
    this.gridApi.setDomLayout('autoHeight');
    this.gridApi.sizeColumnsToFit();
  }

  /* columnaMovida | Parametros: event (obj) */
  columnaMovida(event): void {
    this.gridApi.sizeColumnsToFit();
  }
}
