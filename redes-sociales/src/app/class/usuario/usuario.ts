export class Usuario {
    nombre: string;
    apellidos: string;
    correo: string;
    edad: number;
    avatar: File;
    password: string;
    descripcion: string;
    
    /* CONSTRUCTOR */
    constructor(nombre: string, apellidos: string, correo: string, edad: number, avatar: File, password: string, descripcion: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.edad = edad;
        this.avatar = avatar;
        this.password = password;
        this.descripcion = descripcion;
    }

    /* GETTERs */
    getNombre(): string {
        return this.nombre;
    }

    getApellidos(): string {
        return this.apellidos;
    }
    
    getCorreo(): string {
        return this.correo;
    }

    getEdad(): number {
        return this.edad;
    }

    getAvatar(): File {
        return this.avatar;
    }

    getPassword(): string {
        return this.password;
    }

    getDescripcion(): string {
        return this.descripcion;
    }


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

    setAvatar(avatar: File): void {
        this.avatar = avatar;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    setDescripcion(descripcion): void {
        this.descripcion = descripcion
    }
}
