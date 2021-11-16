export class CheckCross {
    username: {
        texto,
        class
    }
    email: {
        texto,
        class
    }
    password: {
        texto,
        class
    }
    passwordRepetir: {
        texto,
        class
    }

    constructor() {
        this.username = {
            texto: '',
            class: ''
        }
        this.email = {
            texto: '',
            class: ''
        }
        this.password = {
            texto: '',
            class: ''
        }
        this.passwordRepetir = {
            texto: '',
            class: ''
        }
    }

    usernameOk(): void {
        this.username.texto = "✓";
        this.username.class = "bg-success"
    }

    emailOk(): void {
        this.email.texto = "✓";
        this.email.class = "bg-success"
    }

    passwordOk(): void {
        this.password.texto = "✓";
        this.password.class = "bg-success"
    }

    passwordRepetirOk(): void {
        this.passwordRepetir.texto = "✓";
        this.passwordRepetir.class = "bg-success"
    }

    usernameNot(): void {
        this.username.texto = "✗";
        this.username.class = "bg-danger"
    }

    emailNot(): void {
        this.email.texto = "✗";
        this.email.class = "bg-danger"
    }

    passwordNot(): void {
        this.password.texto = "✗";
        this.password.class = "bg-danger"
    }

    passwordRepetirNot(): void {
        this.passwordRepetir.texto = "✗";
        this.passwordRepetir.class = "bg-danger"
    }

}