import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../class/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit{
  users: Usuario[];
  loginForm: FormGroup;
  activatedRouter: ActivatedRoute;
  constructor(private formBuilder: FormBuilder, activatedRouter: ActivatedRoute) {
    this.formBuilder = formBuilder;
    this.activatedRouter = activatedRouter;
    this.users = [];
  };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.activatedRouter;
  }

  loginSubmit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }
};

