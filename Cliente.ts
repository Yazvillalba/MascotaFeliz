import { generarIdUnico } from "./globalID"

export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: number;
    private numeroVisitas: number;
    private esVip: boolean;

    constructor(nombre: string, telefono: number) {
        this.id = generarIdUnico();
        this.nombre = nombre;
        this.telefono = telefono;
        this.numeroVisitas = 0;
        this.esVip = false;
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public getNumeroVisitas(): number {
        return this.numeroVisitas;
    }

    public getEsVip(): boolean {
        return this.esVip;
    }

    // SETTERS:
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    public setNumeroVisitas(numeroVisitas: number): void {
        this.numeroVisitas = numeroVisitas;
        this.esVip = numeroVisitas >= 5;
    }


};