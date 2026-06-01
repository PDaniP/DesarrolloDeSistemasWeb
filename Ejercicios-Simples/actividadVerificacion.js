function buscarElementoEnArreglo(arreglo, elementoBuscado) {
  if (!Array.isArray(arreglo) && arreglo.length === 0) {
    return false;
  }

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === elementoBuscado) {
      return true;
    }
  }

  return false;
}

const datos = [1, 2, 3, 4, 5];
//console.log(buscarElementoEnArreglo(datos, 3)); // true
//console.log(buscarElementoEnArreglo(datos, 10)); // false
//console.log(buscarElementoEnArreglo([], 1)); // false
const arregloValorUnico = ["Pablo"];
const soloStrings = ["Kaene", "Ashcrow", "Ashcliff", "Rygarts"];
const soloEnteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const mezcla = ["Kaene", 90, "Svent", 82, "Kaynz", 85, "Signion"];

function verificar(nombreTest, resultadoReal, resultadoEsperado) {
  if (resultadoReal === resultadoEsperado) {
    console.log(`PASÓ: "${nombreTest}"`);
  } else {
    console.error(`FALLÓ: "${nombreTest}" | Esperaba: ${resultadoEsperado}, pero el código devolvió: ${resultadoReal}`);
  }
}

verificar("Prueba 1 - Arreglo de valor unico", buscarElementoEnArreglo(arregloValorUnico, "Pablo"), true);
verificar("Prueba 2 - Arreglo de valor unico", buscarElementoEnArreglo(arregloValorUnico, "Kaene"), true);
verificar("Prueba 3 - Arreglo de diversos tamaños", buscarElementoEnArreglo(soloStrings, "Kaene"), true);
verificar("Prueba 4 - Arreglo de diversos tamaños", buscarElementoEnArreglo(soloStrings, "Pablo"), true);
verificar("Prueba 5 - Arreglo de diversos tamaños", buscarElementoEnArreglo(soloEnteros, 10), true);
verificar("Prueba 6 - Arreglo de diversos tamaños", buscarElementoEnArreglo(soloEnteros, 100), true);
verificar("Prueba 7 - Arreglo de diversos tamaños", buscarElementoEnArreglo(mezcla, "Svent"), true);
verificar("Prueba 8 - Arreglo de diversos tamaños", buscarElementoEnArreglo(mezcla, "Pablo"), true);