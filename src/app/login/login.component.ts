import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
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
    let encontrado = this.usuarios.usuarios.filter(usuario => usuario.email == data.email);
    console.log(encontrado);
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }
};

