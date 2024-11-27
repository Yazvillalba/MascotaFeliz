// Importamos las clases necesarias
import { Cliente } from "./Cliente";
import { Mascota } from "./Mascota";
import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";
import { Red } from "./Red";

function main() {
    console.log("Iniciando pruebas...");

    //Creacion Clientes
    const cliente1 = new Cliente("Yazmin Villalba", "43864400");
    const cliente2 = new Cliente("Romina Botana", "41526245");

    //Creacion mascotas
    const mascota1 = new Mascota("Kyra", "perro", cliente1.getId());
    const mascota2 = new Mascota("Michi", "gato", cliente2.getId());

    //Creación veterinaria
    const veterinaria1 = new Veterinaria("Veterinaria Basaldua", "Vicente Lopez 2297");

    //Agregar clientes a la veterinaria
    veterinaria1.addCliente(cliente1);
    veterinaria1.addCliente(cliente2);

    //Modificar cliente
    cliente1.setNombre("Juan Carlos Pérez");
    veterinaria1.modifyCliente(cliente1);

    //Incrementar número de visitas y comprobar VIP
    veterinaria1.incrementarNumeroVisitas(cliente1);
    veterinaria1.incrementarNumeroVisitas(cliente1);
    veterinaria1.incrementarNumeroVisitas(cliente1);
    veterinaria1.incrementarNumeroVisitas(cliente1);
    veterinaria1.incrementarNumeroVisitas(cliente1);

    //Agregar mascotas a la veterinaria
    veterinaria1.addMascota(mascota1);
    veterinaria1.addMascota(mascota2);

    //Crear proveedor
    const proveedor1 = new Proveedor("Proveedor PET", 2284545151);

    //Crear red de veterinarias
    const red = new Red();
    red.addVeterinaria(veterinaria1);

    // Agregar proveedor a la red
    red.addProveedor(proveedor1);

    // Modificar proveedor
    proveedor1.setTelefono(2284778855);
    red.modifyProveedor(proveedor1);

    // Eliminar cliente y mascota
    veterinaria1.removeCliente(cliente2);
    veterinaria1.removeMascota(mascota2);

    console.log("RED: ");
    console.log(JSON.stringify(red, null, 2));
}

main();
