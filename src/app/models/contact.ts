export class Contact {
    id?: Number;
    nombre: string;
    apellido: string;
    telefono: string;
    correo:string;
    edad: number;
    activo: number;

    constructor(nombre: string, apellido: string,telefono: string,correo:string,edad: number,activo: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.edad = edad;
        this.activo = activo;
    }
}
