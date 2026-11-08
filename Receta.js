function cortarIngredientes(ingredientes, callback) {
  setTimeout(() => {
    console.log(`Cortando ${ingredientes}`);
    callback();
  }, 2000);
}

function cocinar(accion, callback) {
  setTimeout(() => {
    console.log(`Cocinando ${accion}`);
    callback();
  }, 2000);
}

function servirPlato(plato) {
  console.log("Listo para servir: ", plato);
}

function prepararReceta(plato, callback) {
  console.log("Iniciamos la preparación de la receta: ", plato);

  cortarIngredientes("Vegetales", () => {
    cocinar("Saltearlos", () => {
      cortarIngredientes("Pollo", () => {
        cocinar("Freir", () => {
          cocinar("Mezclar", () => {
            servirPlato(plato);
            callback();
          });
        });
      });
    });
  });
}

prepararReceta("Pollo al Wok", () => {
  console.log("Receta completa!");
});
