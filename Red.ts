import {Veterinaria} from './Veterinaria';
import {Proveedor} from './Proveedor';

export class Red {
    private veterinarias: Veterinaria[] = [];
    private proveedores: Proveedor[] = [];

    public addVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
        console.log(`Sucursal "${veterinaria.getNombre()}" agregada correctamente.`);
    }

    public modifySucursal(veterinaria: Veterinaria): void {
        const index = this.veterinarias.findIndex((s) => s.getId() === veterinaria.getId());
        if (index !== -1) {
            this.veterinarias[index] = veterinaria;
            console.log(`Sucursal con ID ${veterinaria.getId()} modificada correctamente.`);
        } else {
            console.log("Sucursal no encontrada.");
        }
    }

    public removeSucursal(veterinaria: Veterinaria): void {
        const index = this.veterinarias.findIndex((s) => s.getId() === veterinaria.getId());
        if (index !== -1) {
            this.veterinarias.splice(index, 1);
            console.log(`Sucursal con ID ${veterinaria.getId()} eliminada correctamente.`);
        } else {
            console.log("Sucursal no encontrada.");
        }
    }

    public addProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
        console.log(`Proveedor "${proveedor.getNombre()}" agregado correctamente.`);
    }

    public modifyProveedor(proveedor: Proveedor): void {
        const index = this.proveedores.findIndex((p) => p.getId() === proveedor.getId());
        if (index !== -1) {
            this.proveedores[index] = proveedor;
            console.log(`Proveedor con ID ${proveedor.getId()} modificado correctamente.`);
        } else {
            console.log("Proveedor no encontrado.");
        }
    }

    public removeProveedor(proveedor: Proveedor): void {
        const index = this.proveedores.findIndex((p) => p.getId() === proveedor.getId());
        if (index !== -1) {
            this.proveedores.splice(index, 1);
            console.log(`Proveedor con ID ${proveedor.getId()} eliminado correctamente.`);
        } else {
            console.log("Proveedor no encontrado.");
        }
    }
    public getVeterinariaByName(nombre: string): Veterinaria | undefined {
        return this.veterinarias.find((veterinaria) => veterinaria.getNombre().toLowerCase() === nombre.toLowerCase());
    }

    public getProveedorByName(nombre: string): Proveedor | undefined {
        return this.proveedores.find((proveedor) => proveedor.getNombre().toLowerCase() === nombre.toLowerCase());
    }
}