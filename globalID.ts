/* para evitar duplicar código, generamos un método
que podamos exportar en cada clase para generar un ID. 
Además, gestionarlo desde un mismo lugar (es decir no generar listas
distintas en cada clase de manera independiente) nos permite realizar las
validaciones de todos los IDs para que no se repitan. 
Podríamos haber hecho una clase ID si tuviéramos que incluir
más cosas, pero con sólo generar la variable y
el método cumple la función*/

export const listaGlobalDeIDs: number [] = [];

export function generarIdUnico(): number {
    let nuevoId = Math.floor(Math.random() * 1000000);
    while (listaGlobalDeIDs.includes(nuevoId)) {
      nuevoId = Math.floor(Math.random() * 1000000);
    }
    listaGlobalDeIDs.push(nuevoId);
    return nuevoId;
    
  };