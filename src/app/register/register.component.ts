import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})

export class RegisterComponent {
  username: string;
  email: string;
  password: string;
  registerForm: FormGroup;

  constructor() {};

  crearFormulario() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  register() {
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
  };
};
