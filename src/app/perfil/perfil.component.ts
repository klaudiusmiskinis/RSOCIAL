import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../class/usuario';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html'
})

export class PerfilComponent implements OnInit {
  /* Atributos */
  public actualizarDatosForm: FormGroup;
  public actualizarPasswordForm: FormGroup;
  public imageForm: FormGroup;
  public logged: Usuario;
  public ruta: string;
  private usuarios;
  public router;

  /* Constructor */
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
    this.actualizarPasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      passwordRepetir: ['', Validators.required]
    })
    this.imageForm = this.formBuilder.group({
      foto: ['', Validators.required]
    })
  }

  /* Métodos */
  ngOnInit(): void {
    if (!this.logged) return this.router.navigate(['login']);
  }

  /* actualizarDatos | Parametros: void */
  actualizarDatos(): void {
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

  /* actualizarPassword | Parametros: void */
  async actualizarPassword() {
    let password = this.actualizarPasswordForm.value.password;
    let passwordRepetir = this.actualizarPasswordForm.value.passwordRepetir;
    if (password === passwordRepetir && passwordRepetir.length > 4) {
      this.logged.password = await bcrypt.hashSync(password);
      this.usuarios.actualizarUsuario(this.logged);
    }
  }

  /* previsualizar | Parametros: event (obj) */
  previsualizar(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.ruta = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

   /* previsualizar | Parametros: void */
  aplicarFoto(): void {
    this.logged.avatar = this.ruta
    this.ruta = ''
    this.usuarios.actualizarUsuario(this.logged)
    this.usuarios = this.usuarios.getUsuarios();
  }
}
