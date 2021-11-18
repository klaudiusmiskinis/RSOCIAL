import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../class/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit {
  users: Usuario[];
  parametro;
  loginForm: FormGroup;
  activatedRouter: ActivatedRoute;
  constructor(private formBuilder: FormBuilder, activatedRouter: ActivatedRoute) {
    this.formBuilder = formBuilder;
    this.activatedRouter = activatedRouter;
  };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.activatedRouter.params.subscribe(usuarioNuevo => {
      this.parametro = usuarioNuevo;
    })
    if (this.parametro.nombre) {
      console.log(this.parametro)
      this.parametro = new Usuario(this.parametro.username, this.parametro.username, this.parametro.email, 0, './default.jpg', this.parametro.password, 'texto', 'user');
      this.parametro.encriptarPassword();
      console.log(this.parametro)
    }
  }

  cargarUsuarios() {

  }

  loginSubmit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }
};

