import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckCross } from '../class/usuario/checkCross';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;
  validado: boolean = false;
  checkCross: CheckCross = new CheckCross();
  deshabilitado: string = "mt-2 shadow-sm text-center btn btn-outline-color disabled";

  error = {
    texto: '',
    class: ''
  }

  constructor(private formBuilder: FormBuilder) {};

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        passwordRepetir: ['', Validators.required]
    });
  }

  allVerified(): void {
    if (this.checkCross.username.texto == '✓' && this.checkCross.email.texto == '✓' && 
    this.checkCross.password.texto == '✓' && this.checkCross.passwordRepetir.texto == '✓') {
      this.deshabilitado =  'mt-2 shadow-sm text-center btn btn-outline-color';
    } else {
      this.deshabilitado = 'mt-2 shadow-sm text-center btn btn-outline-color disabled';
    }
  }
  
  comprobarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  comprobarUsername(username){
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  }

  llamarError(tipo, textoError) {
    if (tipo) {
      this.error.texto = textoError;
      this.error.class = 'mt-2 p-2 bg-success text-black rounded';
    } else {
      this.error.texto = textoError;
      this.error.class = 'mt-2 p-2 bg-danger text-black rounded';
    }
    this.allVerified();
  }

  validacionUsername() {
    let valor = this.registerForm.value.username
    if (valor.length > 3) {
      if(this.comprobarUsername(valor)) {
        this.llamarError(true, 'El username es válido');
        this.checkCross.usernameOk();
      } else {
        this.llamarError(false, 'El username es inválido');
        this.checkCross.usernameNot();
      }
    } else {
      this.llamarError(false, 'El username es demasiado corto');
      this.checkCross.usernameNot();
    }
    this.allVerified();
  }

  validacionEmail() {
    let valor = this.registerForm.value.email
      if(this.comprobarEmail(valor)) {
        this.llamarError(true, 'El email es válido');
        this.checkCross.emailOk();
      } else {
        this.llamarError(false, 'El email es inválido');
        this.checkCross.emailNot();
      }
      this.allVerified();
  }

  validacionPassword() {
    let valor = this.registerForm.value.passwordRepetir
    let password = this.registerForm.value.password
    if(valor.length > 3) {
      if (valor === password) {
        this.llamarError(true, 'Las contraseñas coinciden');
        this.checkCross.passwordOk();
        this.checkCross.passwordRepetirOk();
      } else {
        this.llamarError(false, 'Las contraseñas no coinciden');
        this.checkCross.passwordNot();
        this.checkCross.passwordRepetirNot();
      }
    } else {
      this.llamarError(false, 'Las contraseñas no coinciden');
      this.checkCross.passwordNot();
      this.checkCross.passwordRepetirNot();
    }
    this.allVerified();
  }

  registerSubmit() {
    let data = {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      passwordRepetir: this.registerForm.get('passwordRepetir')?.value
    }
    console.log(data)
    this.registerForm = new FormGroup({
        username: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        passwordRepetir: new FormControl()
    });
    window.location.href = '/login';
  }
}
