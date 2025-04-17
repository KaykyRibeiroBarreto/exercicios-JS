function missaoResgateSakura() {
    return new Promise((resolve, reject) => {
        const sucesso = true;
        
        setTimeout(() => {
          if (sucesso) {
              resolve("Sakura resgatada com sucesso!");
          }  else {
              reject("Sakura não resgatada!");
            }
          }, 3000);
        
    })
}

missaoResgateSakura()
    .then((resposta) => console.log(resposta))
    .catch((erro) => console.log(erro));