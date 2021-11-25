import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../class/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit {
  public activatedRouter: ActivatedRoute;
  public loginForm: FormGroup;
  public router: Router;
  public usuarios;
  public usuario;

  constructor(private formBuilder: FormBuilder, router: Router, activatedRouter: ActivatedRoute, usuariosService: UsuariosService) {
    this.formBuilder = formBuilder;
    this.activatedRouter = activatedRouter;
    this.usuarios = usuariosService;
    this.router = router;
  };

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.activatedRouter.params.subscribe(usuarioNuevo => {
      this.usuario = usuarioNuevo;
      this.usuario = new Usuario(this.usuario.username, this.usuario.username, this.usuario.email, 0, './default.jpg', this.usuario.password, 'texto', 'user');
      if (this.usuario.nombre != undefined) {
        this.usuarios.addUsuario(this.usuario);
      };
      this.router.navigate(['/login']);
    });
    console.log(this.usuarios)
  };

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

