import readline from "readline";
import { Cliente } from "./Cliente";
import { Mascota } from "./Mascota";
import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";
import { Red } from "./Red";

const red = new Red();


const readlineSync = require('readline-sync');

async function main() {
    let exit = false;
    while (!exit) {
        console.log(`
Menú:
1. Crear Veterinaria
2. Crear Cliente y asignarlo a una Veterinaria
3. Crear Mascota y asignarla a un Cliente
4. Incrementar numero de visitas y comprobar VIP
5. Crear Proveedor
6. Modificar Proveedor
7. Modificar Cliente
8. Modificar Mascota
9. Modificar Veterinaria
10. Eliminar Cliente
11. Eliminar Mascota
12. Eliminar Veterinaria
13. Eliminar Proveedor
14. Ver Red
0. Salir
        `);

        const opcion = readlineSync.question("Seleccione una opcion: ");
        switch (opcion) {
            case "1": // Crear Veterinaria
                const nombreVet = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                const direccionVet = readlineSync.question("Ingrese la direccion de la veterinaria: ");
                const veterinaria = new Veterinaria(nombreVet, direccionVet);
                red.addVeterinaria(veterinaria);
                console.log("Veterinaria creada y añadida a la red.");
                break;

            case "2": // Crear Cliente
                const nombreCliente = readlineSync.question("Ingrese el nombre del cliente: ");
                const telefonoCliente = Number(readlineSync.question("Ingrese el telefono del cliente: "));
                if (isNaN(telefonoCliente)) {
                    console.log("El telefono debe ser un numero.");
                    break;
                }
                const cliente = new Cliente(nombreCliente, telefonoCliente);
                const nombreVetCliente = readlineSync.question("Ingrese el nombre de la veterinaria para asignar el cliente: ");
                const nombreVeterinaria = nombreVetCliente.toLowerCase(); 

                const vetCliente = red.getVeterinariaByName(nombreVeterinaria);
                if (vetCliente) {
                    vetCliente.addCliente(cliente);
                    console.log("Cliente añadido a la veterinaria.");
                } else {
                    console.log("Veterinaria no encontrada.");
                }
                break;

            case "3": // Crear Mascota
                const nombreMascota = readlineSync.question("Ingrese el nombre de la mascota: ");
                const tipoMascota = readlineSync.question("Ingrese el tipo de mascota (e.g., perro, gato): ");

                const nombreCli = readlineSync.question("Ingrese el nombre del cliente de la mascota: ");
                const celular = Number(readlineSync.question("Ingrese el telefono del cliente: "));

                if (isNaN(celular)) {
                    console.error("El telefono debe ser un numero valido.");
                    break;
                }

                const nombreVete = readlineSync.question("Ingrese el nombre de la veterinaria donde desea agregar la mascota: ");
                const vetMascota = red.getVeterinariaByName(nombreVete.toLowerCase());

                if (!vetMascota) {
                    console.log("Veterinaria no encontrada.");
                    break;
                }

                const obtenerCliente = vetMascota.getClienteByNameAndPhone(nombreCli, celular);

                if (!obtenerCliente) {
                    console.log("Cliente no encontrado en esta veterinaria. Primero debe agregar al cliente.");
                    break;

                }

                const mascota = new Mascota(nombreMascota, tipoMascota, obtenerCliente.getId());
                vetMascota.addMascota(mascota);
                console.log("Mascota añadida a la veterinaria.");
                break;


            case "4": // Incrementar visitas y comprobar VIP
                const nombreClienteVisitas = readlineSync.question("Ingrese el nombre del cliente: ");
                const telefonoClienteVisitas = Number(readlineSync.question("Ingrese el telefono del cliente: "));

                if (isNaN(telefonoClienteVisitas)) {
                    console.error("El telefono debe ser un numero valido.");
                    break;
                }
                const nombreVeterinariaVisitas = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                const vetVisitas = red.getVeterinariaByName(nombreVeterinariaVisitas.toLowerCase());

                if (!vetVisitas) {
                    console.log("Veterinaria no encontrada.");
                    break;
                }
                const clienteVisitas = vetVisitas.getClienteByNameAndPhone(nombreClienteVisitas, telefonoClienteVisitas);
                if (!clienteVisitas) {
                    console.log("Cliente no encontrado en esta veterinaria.");
                    break;
                }
                vetVisitas.incrementarNumeroVisitas(clienteVisitas);
                console.log("numero de visitas incrementado. Verifique si el cliente es VIP.");
                break;
            case "5": // Crear Proveedor
                const nombreProveedor = readlineSync.question("Ingrese el nombre del proveedor: ");
                const telefonoProveedor = Number(readlineSync.question("Ingrese el telefono del proveedor: "));
                if (isNaN(telefonoProveedor)) {
                    console.log("El telefono debe ser un numero.");
                    break;
                }
                const proveedor = new Proveedor(nombreProveedor, telefonoProveedor);
                red.addProveedor(proveedor);
                console.log("Proveedor añadido a la red.");
                break;

                case "6": // Modificar Proveedor
                const nombreProveedorMod = readlineSync.question("Ingrese el nombre del proveedor a modificar: ");
                const proveedorMod = red.getProveedorByName(nombreProveedorMod);
            
                if (proveedorMod) {
                    const nuevoNombre = readlineSync.question(`Ingrese el nuevo nombre del proveedor (actual: ${proveedorMod.getNombre()}): `);
                    if (nuevoNombre) {
                        proveedorMod.setNombre(nuevoNombre);
                    }
            
                    const nuevoTel = Number(readlineSync.question(`Ingrese el nuevo telefono del proveedor (actual: ${proveedorMod.getTelefono()}): `));
                    if (!isNaN(nuevoTel)) {
                        proveedorMod.setTelefono(nuevoTel);
                        console.log("Proveedor modificado.");
                    } else {
                        console.log("El telefono debe ser un numero valido.");
                    }
                } else {
                    console.log("Proveedor no encontrado.");
                }
            break;
            case "7": // Modificar Cliente
                const nombreClienteModificar = readlineSync.question("Ingrese el nombre del cliente a modificar: ");
                const telefonoClienteModificar = Number(readlineSync.question("Ingrese el telefono del cliente: "));

                if (isNaN(telefonoClienteModificar)) {
                    console.error("El telefono debe ser un numero valido.");
                    break;
                }

                const nombreVetModificarCliente = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                const vetModificarCliente = red.getVeterinariaByName(nombreVetModificarCliente.toLowerCase());

                if (!vetModificarCliente) {
                    console.log("Veterinaria no encontrada.");
                    break;
                }

                const clienteModificar = vetModificarCliente.getClienteByNameAndPhone(nombreClienteModificar, telefonoClienteModificar);
                if (!clienteModificar) {
                    console.log("Cliente no encontrado en esta veterinaria.");
                    break;
                }

                const nuevoNombreCliente = readlineSync.question("Ingrese el nuevo nombre del cliente: ");
                const nuevoTelefonoCliente = Number(readlineSync.question("Ingrese el nuevo telefono del cliente: "));
                if (isNaN(nuevoTelefonoCliente)) {
                    console.error("El telefono debe ser un numero valido.");
                    break;
                }

                clienteModificar.setNombre(nuevoNombreCliente);
                clienteModificar.setTelefono(nuevoTelefonoCliente);
                console.log("Cliente modificado exitosamente.");
                break;

            case "8": // Modificar Mascota
                const nombreMascotaModificar = readlineSync.question("Ingrese el nombre de la mascota a modificar: ");
                const nombreDueñoMascota = readlineSync.question("Ingrese el nombre del propietario de la mascota: ");
                const telefonoDueñoMascota = Number(readlineSync.question("Ingrese el telefono del propietario de la mascota: "));

                if (isNaN(telefonoDueñoMascota)) {
                    console.error("El telefono debe ser un numero valido.");
                    break;
                }

                const nombreVetModificarMascota = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                const vetModificarMascota = red.getVeterinariaByName(nombreVetModificarMascota.toLowerCase());

                if (!vetModificarMascota) {
                    console.log("Veterinaria no encontrada.");
                    break;
                }

                const dueñoMascota = vetModificarMascota.getClienteByNameAndPhone(nombreDueñoMascota, telefonoDueñoMascota);
                if (!dueñoMascota) {
                    console.log("Propietario de la mascota no encontrado en esta veterinaria.");
                    break;
                }

                const mascotaModificar = vetModificarMascota.getMascotaByNameAndCliente(nombreMascotaModificar, dueñoMascota.getNombre());
                if (!mascotaModificar) {
                    console.log("Mascota no encontrada.");
                    break;
                }

                const nuevoNombreMascota = readlineSync.question("Ingrese el nuevo nombre de la mascota: ");
                const nuevoTipoMascota = readlineSync.question("Ingrese el nuevo tipo de mascota (e.g., perro, gato): ");
                mascotaModificar.setNombre(nuevoNombreMascota);
                mascotaModificar.setEspecie(nuevoTipoMascota);
                console.log("Mascota modificada exitosamente.");
                break;

            case "9": // Modificar Veterinaria
                const nombreVetModificar = readlineSync.question("Ingrese el nombre de la veterinaria a modificar: ");
                const vetModificar = red.getVeterinariaByName(nombreVetModificar.toLowerCase());

                if (!vetModificar) {
                    console.log("Veterinaria no encontrada.");
                    break;
                }

                const nuevoNombreVet = readlineSync.question("Ingrese el nuevo nombre de la veterinaria: ");
                const nuevaDireccionVet = readlineSync.question("Ingrese la nueva direccion de la veterinaria: ");
                vetModificar.setNombre(nuevoNombreVet);
                vetModificar.setDireccion(nuevaDireccionVet);
                console.log("Veterinaria modificada exitosamente.");
                break;

                case "10": // Eliminar Cliente
                const nombreClienteEliminar = readlineSync.question("Ingrese el nombre del cliente a eliminar: ");
                const telefonoClienteEliminar = Number(readlineSync.question("Ingrese el telefono del cliente: "));
            
                if (isNaN(telefonoClienteEliminar)) {
                    console.error("El telefono debe ser un numero valido.");
                    break;
                }
            
                const nombreVetEliminarCliente = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                const vetEliminarCliente = red.getVeterinariaByName(nombreVetEliminarCliente.toLowerCase());
            
                if (!vetEliminarCliente) {
                    console.log("Veterinaria no encontrada.");
                    break;
                }
            
                const clienteEliminar = vetEliminarCliente.getClienteByNameAndPhone(nombreClienteEliminar, telefonoClienteEliminar);
                if (clienteEliminar) {
                    const confirmarEliminar = readlineSync.keyInYNStrict(`¿Esta seguro de que desea eliminar al Cliente ${clienteEliminar.getNombre()}?`);
            
                    if (confirmarEliminar) {
                        const mascotasCliente = vetEliminarCliente.getMascotaByCliente(clienteEliminar.getNombre(), clienteEliminar.getTelefono());
                        if (mascotasCliente.length > 0) {
                            mascotasCliente.forEach(mascota => {
                                vetEliminarCliente.removeMascota(mascota);
                                console.log(`Mascota ${mascota.getNombre()} eliminada.`);
                            });
                        }
            
                        vetEliminarCliente.removeCliente(clienteEliminar);
                        console.log("Cliente eliminado exitosamente.");
                    } else {
                        console.log("Operación cancelada.");
                    }
                } else {
                    console.log("Cliente no encontrado.");
                }
                break;
            

            case "11": // Eliminar Mascota
                const nombreMascotaEliminar = readlineSync.question("Ingrese el nombre de la mascota a eliminar: ");
                const nombreDueñoMascotaEliminar = readlineSync.question("Ingrese el nombre del Propietario de la mascota: ");
                const telefonoDueñoMascotaEliminar = Number(readlineSync.question("Ingrese el telefono del Propietario de la mascota: "));

                if (isNaN(telefonoDueñoMascotaEliminar)) {
                    console.error("El telefono debe ser un numero valido.");
                    break;
                }

                const nombreVetEliminarMascota = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                const vetEliminarMascota = red.getVeterinariaByName(nombreVetEliminarMascota.toLowerCase());

                if (!vetEliminarMascota) {
                    console.log("Veterinaria no encontrada.");
                    break;
                }

                const dueñoMascotaEliminar = vetEliminarMascota.getClienteByNameAndPhone(nombreDueñoMascotaEliminar, telefonoDueñoMascotaEliminar);
                if (!dueñoMascotaEliminar) {
                    console.log("Propietario de la mascota no encontrado.");
                    break;
                }

                const mascotaEliminar = vetEliminarMascota.getMascotaByNameAndCliente(nombreMascotaEliminar, dueñoMascotaEliminar.getNombre());
                if (mascotaEliminar) {
                    const confirmarEliminar = readlineSync.keyInYNStrict(`¿Esta seguro de que desea eliminar la mascota ${mascotaEliminar}?`);
                    if(confirmarEliminar){
                        vetEliminarMascota.removeMascota(mascotaEliminar);
                        console.log("Mascota eliminada exitosamente.");
                    } else{
                        console.log("Operacion cancelada.");

                    }
                } else{
                    console.log("Mascota no encontrada.");

                }

          
                break;

            case "12": // Eliminar Veterinaria
                const nombreVetEliminar = readlineSync.question("Ingrese el nombre de la veterinaria a eliminar: ");
                const vetEliminar = red.getVeterinariaByName(nombreVetEliminar.toLowerCase());

                if (vetEliminar) {
                    const confirmarEliminar = readlineSync.keyInYNStrict(`¿Esta seguro de que desea eliminar la veterinaria ${vetEliminar}?`);
                    if(confirmarEliminar){
                        red.removeSucursal(vetEliminar);
                        console.log("Veterinaria eliminada exitosamente.");

                    } else{
                        console.log("Operacion cancelada.");

                    }
                  
                } else{
                    console.log("Veterinaria no encontrada.");
                }

                break;
            case "13": // Eliminar Proveedor
                const nombreProveedorEliminar = readlineSync.question("Ingrese el nombre del proveedor a eliminar: ");
                const proveedorEliminar = red.getProveedorByName(nombreProveedorEliminar);
            
                if (proveedorEliminar) {
                    const confirmarEliminar = readlineSync.keyInYNStrict(`¿Esta seguro de que desea eliminar al proveedor ${nombreProveedorEliminar}?`);
            
                    if (confirmarEliminar) {
                        red.removeProveedor(proveedorEliminar);
                        console.log("Proveedor eliminado.");
                    } else {
                        console.log("Operacion cancelada.");
                    }
                } else {
                    console.log("Proveedor no encontrado.");
                }
                break;
            case "14": // Ver Red
                console.log("RED:");
                console.log(JSON.stringify(red, null, 2));
                break;

            case "0": // Salir
                exit = true;
                break;

            default:
                console.log("Opción no válida.");
        }
    }

    readlineSync.close();
}

main().catch((error) => console.error(error));
