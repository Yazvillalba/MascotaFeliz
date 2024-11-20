import { generarIdUnico } from "./globalID"; // importa la función para generar ID únicos.

export class Mascota {
    private id: number;           // propiedad privada que almacena el ID de la mascota.
    private nombre: string;       // propiedad privada para el nombre de la mascota.
    private especie: string;      // propiedad privada para la especie de la mascota (perro, gato, etc.).
    private idCliente: number;    // propiedad privada que guarda el ID del cliente dueño de la mascota.

    // constructor: inicializa las propiedades de la clase cuando se crea una nueva instancia de Mascota.
    constructor(nombre: string, especie: string, idCliente: number) {
        this.id = generarIdUnico(); // asigna un ID único a la mascota usando la función generada en globalID.ts.
        this.nombre = nombre;       // asigna el nombre de la mascota.
        
        // Valida que la especie sea "perro" o "gato". Si no lo es, la asigna como "exótica".
        this.especie = especie === "perro" || especie === "gato" ? especie : "exótica";
        
        this.idCliente = idCliente; // Asocia un cliente con esta mascota a través de su ID.
    }

    // GETTERS (Métodos para obtener las propiedades de la clase):
    
    public getId(): number {
        return this.id; // devuelve el ID único de la mascota.
    }

    public getNombre(): string {
        return this.nombre; // devuelve el nombre de la mascota.
    }

    public getEspecie(): string {
        return this.especie; // devuelve la especie de la mascota (perro, gato, exótica, etc.).
    }

    public getIdCliente(): number {
        return this.idCliente; // devuelve el ID del cliente dueño de la mascota.
    }

    // SETTERS (Métodos para modificar las propiedades de la clase):

    public setNombre(nombre: string): void {
        this.nombre = nombre; // Modifica el nombre de la mascota.
    }

    public setEspecie(especie: string): void {
        // si la especie no es "perro" ni "gato", la asigna como "exótica".
        this.especie = especie === "perro" || especie === "gato" ? especie : "exótica";
    }
};