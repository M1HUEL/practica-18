const temporizadorCallback = (callback) => {
  setTimeout(() => {
    callback();
  }, 3000);
};

temporizadorCallback(() => {
  console.log("Termino el temporizador!!!");
});
