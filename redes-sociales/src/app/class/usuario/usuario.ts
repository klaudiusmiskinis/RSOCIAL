export class Usuario {
    nombre: string;
    apellidos: string;
    correo: string;
    edad: number;
    avatar: File;
    password: string;
    descripcion: string;
    
    constructor(nombre: string, apellidos: string, correo: string, edad: number, avatar: File, password: string, descripcion: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.edad = edad;
        this.avatar = avatar;
        this.password = password;
        this.descripcion = descripcion;
    }

}
