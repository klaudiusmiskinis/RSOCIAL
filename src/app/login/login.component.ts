import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public router: Router;
  public submit;
  public usuarios;
  public usuario;
  public acceso = false;

  constructor(private formBuilder: FormBuilder, router: Router, usuariosService: UsuariosService) {
    this.formBuilder = formBuilder;
    this.usuarios = usuariosService;
    this.router = router;
    this.submit = 'mt-3 shadow-sm text-center btn btn-outline-color disabled'
  };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  };

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

  comprobarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  disableSubmit() {
    if (!this.submit.includes('disabled')) {
      this.submit = this.submit + 'disabled'
    }
  }

  enableSubmit() {
    this.submit = this.submit.split('disabled')[0];
  }
};

