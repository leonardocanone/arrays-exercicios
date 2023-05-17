// # Exercício 3 - Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.

// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

let arrayNumeros = [14, 93, 47, 72, 28, 55, 39, 6]
let arrayStrings = ["Napoli", "Roma", "Firenze", "Veneza", "Milão", "Torino"]
let arrayMisto = [3, "batata", true, "alface", 60, false]

let arrayNumerosCopia = arrayNumeros.slice()
let arrayStringsCopia = arrayStrings.slice()
let arrayMistoCopia = arrayMisto.slice()

// Faça o que se pede abaixo nas **cópias** dos arrays originais:
// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.

arrayNumerosCopia.unshift(100)
console.log(arrayNumeros);
console.log(arrayNumerosCopia);

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

arrayStringsCopia.pop()
console.log(arrayStrings);
console.log(arrayStringsCopia);

// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.

arrayMistoCopia.splice(1, 1)
console.log(arrayMisto);
console.log(arrayMistoCopia);


