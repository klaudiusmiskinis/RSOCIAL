import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckCross } from '../class/checkCross';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../class/usuario';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  /* Atributos */
  public registerForm: FormGroup;
  public checkCross: CheckCross;
  public deshabilitado: string;
  public router: Router;
  public usuarios;
  public usuario;
  public error;

  /* Constructor */
  constructor(private formBuilder: FormBuilder, router: Router, usuariosService: UsuariosService) {
    this.formBuilder = formBuilder;
    this.usuarios = usuariosService;
    this.checkCross = new CheckCross();
    this.router = router;
    this.deshabilitado = "mt-2 shadow-sm text-center btn btn-outline-color disabled";
    this.error = {
      texto: '',
      class: ''
    }
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(4)],
      passwordRepetir: ['', Validators.required]
    });
  };

  /* Métodos */
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        passwordRepetir: ['', Validators.required]
    });
  }

  /* allVerified | Parametros: void */
  allVerified(): void {
    if (this.checkCross.username.texto == '✓' && this.checkCross.email.texto == '✓' && 
    this.checkCross.password.texto == '✓' && this.checkCross.passwordRepetir.texto == '✓') {
      this.deshabilitado =  'mt-2 shadow-sm text-center btn btn-outline-color';
    } else {
      this.deshabilitado = 'mt-2 shadow-sm text-center btn btn-outline-color disabled';
    }
  }
  
  /* comprobarEmail | Parametros: username (string) */
  comprobarEmail(email: string): Boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

   /* comprobarUsername | Parametros: username (string) */
  comprobarUsername(username: string): Boolean{
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  }

  /* llamarError | Parametros: tipo (Boolean), textoError (string) */
  llamarError(tipo: Boolean, textoError: string): void {
    if (tipo) {
      this.error.texto = textoError;
      this.error.class = 'mt-2 p-2 bg-success text-black rounded';
    } else {
      this.error.texto = textoError;
      this.error.class = 'mt-2 p-2 bg-danger text-black rounded';
    }
    this.allVerified();
  }

  /* validacionUsername | Parametros: void */
  validacionUsername(): void {
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

  /* validacionEmail | Parametros: void */
  validacionEmail(): void {
    let valor = this.registerForm.value.email
      if(this.comprobarEmail(valor)) {
        this.llamarError(true, 'El email es válido');
        this.checkCross.emailOk();
      } else {
        this.llamarError(false, 'El email es inválido');
        this.checkCross.emailNot();
      }
      if(this.usuarios.comprobarEmail(valor).length > 0) {
        this.llamarError(false, 'El email existe');
        this.checkCross.emailNot();
      }
      this.allVerified();
  }

  /* validacionPassword | Parametros: void */
  validacionPassword(): void {
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

  /* registerSubmit | Parametros: void */
  async registerSubmit() {
    let password = await bcrypt.hashSync(this.registerForm.get('password')?.value, 10)
    this.usuario = new Usuario(this.registerForm.get('username')?.value, this.registerForm.get('username')?.value, this.registerForm.get('email')?.value, 0, '/assets/img/user.png', password, 'lorem alea iacta est', 'user');
    this.registerForm = new FormGroup({
        username: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        passwordRepetir: new FormControl()
    });
    this.usuarios.addUsuario(this.usuario);
    this.usuario = null;
    this.router.navigate(['login'])
  }
}
