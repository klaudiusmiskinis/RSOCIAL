import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../class/usuario';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public router: Router;
  public usuarios;
  public usuario;
  public acceso = false;

  constructor(private formBuilder: FormBuilder, router: Router, usuariosService: UsuariosService) {
    this.formBuilder = formBuilder;
    this.usuarios = usuariosService;
    this.router = router;
  };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  };

  loginSubmit() {
    let data = {
      username: this.loginForm.get('username')?.value,
      email: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    let encontrado = this.usuarios.usuarios.filter(usuario => usuario.correo === data.email);
    let resultado = bcrypt.compareSync(data.password, encontrado[0].password)
    if ((encontrado != ('')) && (data.password != '') && (resultado)) {
      this.acceso = true;
      console.log(encontrado)
    }
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
    if (this.acceso) {
      this.router.navigate(['home', {usuario: encontrado}])
    }
  }
};

