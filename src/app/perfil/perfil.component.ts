import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['../app.component.css']
})

export class PerfilComponent implements OnInit {
  public actualizarDatosForm: FormGroup;
  public router;
  public logged;
  private usuarios;

  constructor(Router: Router, usuariosService: UsuariosService, private formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.router = Router;
    this.usuarios = usuariosService;
    this.logged = this.usuarios.findUsuarioByEmail(localStorage.getItem('user'))[0]
    this.actualizarDatosForm = this.formBuilder.group({
      nombre: [this.logged.nombre, Validators.required],
      apellidos: [this.logged.apellidos, Validators.required],
      edad: [this.logged.edad, Validators.required],
      descripcion: [this.logged.descripcion, Validators.required]
    });
  }

  ngOnInit(): void {
    if (!this.logged) return this.router.navigate(['login']);
  }

  actualizarDatos() {
    let actualizar = false;
    let nombre = this.actualizarDatosForm.value.nombre
    let apellidos = this.actualizarDatosForm.value.apellidos
    let edad = this.actualizarDatosForm.value.edad
    let descripcion = this.actualizarDatosForm.value.descripcion
    if (this.logged.nombre != nombre) this.logged.nombre = nombre, actualizar = true;
    if (this.logged.apellidos != apellidos) this.logged.apellidos = apellidos, actualizar = true; 
    if (this.logged.edad != edad) this.logged.edad = edad,  actualizar = true; 
    if (this.logged.descripcion != descripcion) this.logged.descripcion = descripcion, actualizar = true; 
    if (actualizar) this.usuarios.actualizarUsuario(this.logged)
  }

}
