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
  }

  constructor(private formBuilder: FormBuilder) {};

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        passwordRepetir: ['', Validators.required]
    });
  }

  validacionUsername() {
    let valor = this.registerForm.value.username
    if (valor.length > 3) {
      this.error.texto = 'El username es válido';
      this.error.clase = 'mt-2 p-2 bg-success text-black rounded';
    } else {
      this.error.texto = 'El username es demasiado corto';
      this.error.clase = 'mt-2 p-2 bg-danger text-black rounded';
    }
  }

  validacionEmail() {
    let valor = this.registerForm.value.email
    if (valor.length > 3) {
      this.error.texto = 'El email es válido';
      this.error.clase = 'mt-2 p-2 bg-success text-black rounded'
    } else {
      this.error.texto = 'El email es demasiado corto';
      this.error.clase = 'mt-2 p-2 bg-danger text-black rounded'
    }
  }

  validacionPassword() {
    let valor = this.registerForm.value.password
    if(valor.length > 3) {
      this.error.texto = 'La contraseña es válida';
      this.error.clase = 'mt-2 p-2 bg-success text-black rounded'
    } else {
      this.error.texto = 'La contraseña es demasiado corto';
      this.error.clase = 'mt-2 p-2 bg-danger text-black rounded'
    }
  }

  validacionPasswordRepetir() {
    let valor = this.registerForm.value.passwordRepetir
    let password = this.registerForm.value.password
    if(valor.length > 3) {
      if (valor === password) {
        this.error.texto = 'Las contraseñas coinciden';
        this.error.clase = 'mt-2 p-2 bg-success text-black rounded'
      } else {
        this.error.texto = 'Las contraseñas no coinciden';
        this.error.clase = 'mt-2 p-2 bg-danger text-black rounded'
      }
    } else {
      this.error.texto = 'La contraseña repetida es demasiado corta';
      this.error.clase = 'mt-2 p-2 bg-danger text-black rounded'
    }
  }
}
