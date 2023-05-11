export class Perfil {
    public nombres: string;
    public ci: string;
    public celular: string;
    public direccion: string;
    public fecha: string;
    public idNotificacion: string;

    constructor( nombres: string, ci: string, celular: string, direccion: string, fecha: string, idNotificacion: string ) {
        this.nombres = nombres;
        this.ci = ci;
        this.celular = celular;
        this.direccion = direccion;
        this.fecha = fecha;
        this.idNotificacion = idNotificacion
    }
}
