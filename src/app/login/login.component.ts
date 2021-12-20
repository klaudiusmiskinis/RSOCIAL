import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
import { Usuario } from '../class/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  /* Atributos */
  public loginForm: FormGroup;
  public router: Router;
  public submit: string;
  public usuario: Usuario;
  public acceso: Boolean;
  public usuarios;

  /* Constructor */
  constructor(private formBuilder: FormBuilder, router: Router, usuariosService: UsuariosService) {
    this.formBuilder = formBuilder;
    this.usuarios = usuariosService;
    this.router = router;
    this.submit = 'mt-3 shadow-sm text-center btn btn-outline-color disabled'
    this.acceso = false;
  };

  /* Métodos */
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  };

   /* validacion | Parametros: void  */
  validacion() {
    let mail = this.loginForm.value.email;
    let pass = this.loginForm.value.password;
    if (this.comprobarEmail(mail)) {
      if (mail && pass && pass.length > 2) {
        this.enableSubmit();
      } else {
        this.disableSubmit();
      }
    } else {
      this.disableSubmit();
    }
  }

   /* login | Parametros: void  */
  loginSubmit() {
    let data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    
    let encontrado = this.usuarios.findUsuarioByEmail(data.email);
    if (encontrado) {
      let resultado = bcrypt.compareSync(data.password, encontrado[0].password)
      if (resultado) {
        this.acceso = true;
        if (this.acceso) {
          localStorage.setItem('user', encontrado[0].correo)
          this.router.navigate(['home'])
        }
      }
    }

    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  /* comprobarEmail | Parametros: email (string) */
  comprobarEmail(email: string): Boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  /* disableSubmit | Parametros: void  */
  disableSubmit(): void {
    if (!this.submit.includes('disabled')) {
      this.submit = this.submit + 'disabled'
    }
  }

  /* enableSubmit | Parametros: void  */
  enableSubmit(): void {
    this.submit = this.submit.split('disabled')[0];
  }
};

