import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../class/usuario';
import cuentas from '../json/cuentas.json';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit {
  public cuentas: Usuario[] = cuentas;
  public activatedRouter: ActivatedRoute;
  public loginForm: FormGroup;
  public usuarios: Usuario[];
  public router: Router;
  public usuario;

  constructor(private formBuilder: FormBuilder, router: Router, activatedRouter: ActivatedRoute) {
    this.formBuilder = formBuilder;
    this.activatedRouter = activatedRouter;
    this.router = router;
    this.usuarios = [];
  };

  ngOnInit() {
    this.cargarUsuarios();
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.activatedRouter.params.subscribe(usuarioNuevo => {
      this.usuario = usuarioNuevo;
      this.usuario = new Usuario(this.usuario.username, this.usuario.username, this.usuario.email, 0, './default.jpg', this.usuario.password, 'texto', 'user');
      if (this.usuario.nombre != undefined) {
        this.usuarios.push(this.usuario);
      };
      this.router.navigate(['/login']);
    });
  };

  cargarUsuarios() {
    this.cuentas.forEach(cuenta => {
      this.usuarios.push(cuenta);
    })
  }

  loginSubmit() {
    let data = {
      username: this.loginForm.get('username')?.value,
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }
};

