import { generarIdUnico } from "./globalID";

export class Proveedor{
    private id: number;
    private nombre: string;
    private telefono: number;
    constructor(nombre: string, telefono: number) {
        this.id = generarIdUnico();
        this.nombre = nombre;       
        this.telefono = telefono; 
    }

    public getNombre(): string {
        return this.nombre;
    }
    
    public getTelefono(): number {
        return this.telefono;
    }
    
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    
    public setTelefono(telefono: number) {
        this.telefono = telefono;
    }
    
    public getId(): number {
        return this.id;
    }

}