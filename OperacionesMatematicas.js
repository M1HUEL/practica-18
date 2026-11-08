const operacionesMatematicas = (numero1, numero2, callback) => {
  return callback(numero1, numero2);
};

const resultadoSuma = operacionesMatematicas(1, 1, (numero1, numero2) => {
  return numero1 + numero2;
});

console.log(resultadoSuma);

const resultadoResta = operacionesMatematicas(1, 1, (numero1, numero2) => {
  return numero1 - numero2;
});

console.log(resultadoResta);

const resultadoMultiplicacion = operacionesMatematicas(
  1,
  1,
  (numero1, numero2) => {
    return numero1 * numero2;
  },
);

console.log(resultadoMultiplicacion);

const resultadoDivision = operacionesMatematicas(1, 1, (numero1, numero2) => {
  return numero1 / numero2;
});

console.log(resultadoDivision);
