// Criar um método para ler propriedades de um objeto e 
// eixibir somente as propriedades do tipo string que estão nesse objeto

const filme ={
  titulo: 'Vingadores',
  personagem:'Thor',
  ano:2020
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
for (prop in obj)
  if(typeof obj[prop]=== 'string')
      console.log(prop,obj[prop])
}