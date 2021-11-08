import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  loginSubmit() {
    console.log(this.loginForm.get('username'), this.loginForm.get('password'));
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
    
  }

};

