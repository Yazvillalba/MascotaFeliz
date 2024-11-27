import {Cliente} from './Cliente';
import { Mascota } from './Mascota';
export class Veterinaria {
    private id: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[] = [];
    private mascotas: Mascota[] = [];
    constructor(nombre: string, direccion: string) {
        this.id = this.generateId();
        this.nombre = nombre;
        this.direccion = direccion;
    }

    private generateId(): number {
        return Math.floor(Math.random() * 1000000);
    }

    getId(): number {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(value: string) {
        this.nombre = value;
    }

    getDireccion(): string {
        return this.direccion;
    }

    setDireccion(value: string) {
        this.direccion = value;
    }
    public addCliente(cliente: Cliente): void {
        if (this.clientes.some((v) => v.getId() === cliente.getId())) {
            console.log("Cliente existente en la Veterinaria.");
        } else {
            this.clientes.push(cliente);
            console.log(
                "Se agrego el cliente con id " + cliente.getId() + "correctamente"
            );
        }
    }

    public modifyCliente(cliente: Cliente): void {
        if (this.existeCliente(cliente)) {
            this.clientes.forEach((v, index) => {
                if (v.getId() === cliente.getId()) {
                    this.clientes[index] = cliente;
                    return;
                }
            });
        } else {
            console.log("Vehiculo no encontrado");
        }
    }
    public existeCliente(cliente: Cliente): boolean {
        if (this.clientes.find((v) => v.getId() === cliente.getId())) {
          return true;
        }
        return false;
    }
    public removeCliente(cliente: Cliente): void {
        const index = this.clientes.findIndex((v) => v.getId() === cliente.getId());
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cliente con id ${cliente.getId()} eliminado correctamente.`);
        } else {
            console.log("Cliente no encontrado en la Veterinaria.");
        }
    }
    public addMascota(mascota: Mascota): void{
        if (this.mascotas.some((v) => v.getId() === mascota.getId())) {
            console.log("Mascota existente en la Veterinaria.");
        } else {
            this.mascotas.push(mascota);
            console.log(
                "Se agrego la mascota con id " + mascota.getId() + "correctamente"
            );
        }
    }
    public modifyMascota(mascota: Mascota): void {
        if (this.existeMascota(mascota)) {
            this.mascotas.forEach((v, index) => {
                if (v.getId() === mascota.getId()) {
                    this.mascotas[index] = mascota;
                    return;
                }
            });
        } else {
            console.log("Vehiculo no encontrado");
        }
    }
    public existeMascota(mascota: Mascota): boolean {
        if (this.mascotas.find((v) => v.getId() === mascota.getId())) {
          return true;
        }
        return false;
    }
    public removeMascota(mascota: Mascota): void {
        const index = this.mascotas.findIndex((v) => v.getId() === mascota.getId());
        if (index !== -1) {
            this.mascotas.splice(index, 1);
            console.log(`Cliente con id ${mascota.getId()} eliminado correctamente.`);
        } else {
            console.log("Cliente no encontrado en la Veterinaria.");
        }
    }
    actualizarDatos(nombre: string, direccion: string): void 
    {
        this.nombre = nombre;
        this.direccion = direccion;
    }
    public incrementarNumeroVisitas(cliente: Cliente): void {
        const clienteExistente = this.clientes.find((v) => v.getId() === cliente.getId());
        if (clienteExistente) {
            const nuevasVisitas = clienteExistente.getNumeroVisitas() + 1;
            clienteExistente.setNumeroVisitas(nuevasVisitas);
            console.log(
                `Cliente con ID ${cliente.getId()} ahora tiene ${nuevasVisitas} visitas. ${clienteExistente.getEsVip() ? 'Es un cliente VIP.' : ''}`
            );
        } else {
            console.log(`Cliente con ID ${cliente.getId()} no encontrado.`);
        }
    }
    
}
