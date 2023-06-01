/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function areaCalc(l1, l2) {
  area = l1 * l2
  return area
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
  let sum = 0
  if (n1 === n2) {
    sum = (n1 + n2) * 3
  } else {
    sum = n1 + n2
  }
  return sum
}

console.log(crazySum(2, 2), "esercizio 2")

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n1, n2 = 19) {
  let result = 0
  if (n1 > n2) {
    result = (n1 % n2) * 3
  } else {
    result = n1 % n2
  }
  return result
}

console.log(crazyDiff(121), "esercizio 3")

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(int) {
  let errMessage
  if (Number.isInteger(int)) {
    if (int >= 20 && int <= 100) {
      return true
    } else if (int === 40) {
      return true
    } else {
      return false
    }
  } else {
    return (errMessage = "inserisci un numero intero")
  }
}
boundaryResult = boundary(120.5)
console.log(boundaryResult, "esercizio 3")
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(initialString) {
  let epicodeString = "EPICODE"
  let stringToVerify = ""
  let finalString = ""
  for (let i = 0; i < 7; i++) {
    stringToVerify += initialString.charAt(i)
  }

  if (stringToVerify.toUpperCase() !== "EPICODE") {
    finalString += epicodeString + " " + initialString
    console.log(finalString)
  } else {
    console.log(initialString)
  }
}
epify("hello world")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(int) {
  let isMultiplo
  if (Number.isInteger(int) && int > 0) {
    if (int % 3 === 0 || int % 7 === 0) {
      console.log("Il numero è multiplo di 3 o 7")
      return (isMultiplo = true)
    } else {
      console.log("Il numero non è multiplo di 3 o 7")
      return (isMultiplo = false)
    }
  } else {
    console.log(
      "Inserisci un numero intero per verificare che sia multiplo di 3 o 7"
    )
  }
}
check3and7(30)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
  let newString = ""
  console.log(str.length)
  for (let i = str.length; i >= 0; i--) {
    newString += str.charAt(i)
  }
  return newString
}

let reversedString = reverseString("ciaoneee")
console.log(reversedString)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {
  stringa = stringa.toLowerCase().split(" ")
  for (let i = 0; i < stringa.length; i++) {
    stringa[i] = stringa[i].charAt(0).toUpperCase() + stringa[i].slice(1)
  }
  return stringa.join(" ")
}
console.log(upperFirst("Ciao provo la funzione"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string) {
  let newString = ""
  newString = string.substring(1, string.length - 1)
  return newString
}
let stringa = cutString("prova")
console.log(stringa)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(number) {
  const arrayOfNumber = []
  for (let i = 0; i < number; i++) {
    arrayOfNumber.push(Math.floor(Math.random() * 11))
  }
  console.log(arrayOfNumber)
  return arrayOfNumber
}
let resultArray = giveMeRandom(10)
