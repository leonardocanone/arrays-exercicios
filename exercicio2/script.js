// # Exercício 2 - Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:
// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.

let arrayNumeros = [14, 93, 47, 72, 28, 55, 39, 6]
let arrayStrings = ["Napoli", "Roma", "Firenze", "Veneza", "Milão", "Torino"]
let arrayMisto = [3, true, "batata", 60, "alface", false]
console.log(arrayNumeros, arrayStrings, arrayMisto);

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

console.log(arrayNumeros.length)
console.log(arrayStrings.length)
console.log(arrayMisto.length)

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

console.log(arrayNumeros[0])
console.log(arrayStrings[1])
console.log(arrayMisto[2])

// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.

console.log(arrayNumeros.includes(93));
console.log(arrayMisto.includes("Batata"));

