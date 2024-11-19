import { generarIdUnico } from "./globalID"

export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: string;
    private numeroVisitas: number;
    private esVip: boolean;

    constructor(nombre: string, telefono: string) {
        this.id = generarIdUnico();
        this.nombre = nombre;
        this.telefono = telefono;
        this.numeroVisitas = 0;
        this.esVip = false;
    }

    // Había hecho este método acá pero considero que es algo que tiene que manejarse desde veterinaria
    // public incrementarVisitas(): void {
    //     this.numeroVisitas++;
    //     if (this.numeroVisitas >= 5) {
    //       this.esVip = true;
    //     }
    //   }

    // GETTERS: 

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getTelefono(): string {
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

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    public setNumeroVisitas(numeroVisitas: number): void {
        this.numeroVisitas = numeroVisitas;
        this.esVip = numeroVisitas >= 5;
    }


};