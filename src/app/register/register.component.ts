import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;
  validado: boolean = false;
  error = {
    texto: '',
    clase: ''
  };

  constructor(private formBuilder: FormBuilder) {};

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        passwordRepetir: ['', Validators.required]
    });
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
      this.error.clase = 'mt-2 p-2 bg-success text-black rounded';
    } else {
      this.error.texto = textoError;
      this.error.clase = 'mt-2 p-2 bg-danger text-black rounded';
    }
  }

  validacionUsername() {
    let valor = this.registerForm.value.username
    if (valor.length > 3) {
      if(this.comprobarUsername(valor)) {
        this.llamarError(true, 'El username es válido');
      } else {
        this.llamarError(false, 'El username es inválido');
      }
    } else {
      this.llamarError(false, 'El username es demasiado corto');
    }
  }

  validacionEmail() {
    let valor = this.registerForm.value.email
      if(this.comprobarEmail(valor)) {
        this.llamarError(true, 'El email es válido');
      } else {
        this.llamarError(false, 'El email es inválido');
      }
  }

  validacionPassword() {
    let valor = this.registerForm.value.passwordRepetir
    let password = this.registerForm.value.password
    if(valor.length > 3) {
      if (valor === password) {
        this.llamarError(true, 'Las contraseñas coinciden');
      } else {
        this.llamarError(false, 'Las contraseñas no coinciden');
      }
    } else {
      this.llamarError(false, 'Las contraseñas no coinciden');
    }
  }
}
