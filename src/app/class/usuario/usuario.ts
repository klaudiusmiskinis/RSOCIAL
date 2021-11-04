import * as bcrypt from 'bcryptjs';

export class Usuario {
    nombre: string;
    apellidos: string;
    correo: string;
    edad: number;
    avatar: string;
    password: string;
    descripcion: string;
    rol: string;
    
    /* CONSTRUCTOR */
    constructor(nombre: string, apellidos: string, correo: string, edad: number, avatar: string, password: string, descripcion: string, rol: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.edad = edad;
        this.avatar = avatar;
        this.password = password;
        this.descripcion = descripcion;
        this.rol = rol
    };

    /* GETTERs */
    getNombre(): string {
        return this.nombre;
    };

    getApellidos(): string {
        return this.apellidos;
    };
    
    getCorreo(): string {
        return this.correo;
    };

    getEdad(): number {
        return this.edad;
    };

    getAvatar(): string {
        return this.avatar;
    };

    getPassword(): string {
        return this.password;
    };

    getDescripcion(): string {
        return this.descripcion;
    };

    geRol(): string {
        return this.rol;
    };

    /* SETTERs */
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    setCorreo(correo: string): void {
        this.correo = correo;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    setAvatar(avatar: string): void {
        this.avatar = avatar;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    setRol(rol: string): void {
        this.rol = rol;
    }

    /* MÉTODOS */
    encriptarPassword() {
        this.setPassword(bcrypt.hashSync(this.password, 10));
    }

    compararPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.getPassword());
    }
}
