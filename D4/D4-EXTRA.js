// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
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
let arrayOfNumber = giveMeRandom(10)

function checkArray(arr) {
  arr = arrayOfNumber
  let total = 0
  console.log(arrayOfNumber)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log(arr[i], "maggiore di 5")
      total += arr[i]
    } else {
      console.log(arr[i], "minore di 5")
    }
  }
  console.log(total, "sono il totale di maggiori di 5")
  return total
}

checkArray()

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  { price: 100, name: "jacket", id: 1, quantity: 3 },
  { price: 20, name: "shirt", id: 2, quantity: 1 },
]
function shoppingCartTotal() {
  let toPay = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    toPay += shoppingCart[i].price * shoppingCart[i].quantity
  }
  console.log(toPay, "da pagare")
  return toPay
}
shoppingCartTotal()

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let added = [{ price: 20, name: "shirt", id: 2, quantity: 3 }]
function addToShoppingCart(added) {
  for (let i = 0; i < added.length; i++) {
    for (let j = 0; j < shoppingCart.length; j++) {
      if (added[i].name === shoppingCart[j].name) {
        shoppingCart[j].quantity += added[i].quantity
        console.log("aggiunto al carrello")
      }
    }
  }
  console.log(shoppingCart)
  return shoppingCart
}

addToShoppingCart(added)

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(arr) {
  let maxValue = [{ price: 0, name: null, id: null, quantity: null }]
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > maxValue[0].price) {
      maxValue.pop()
      maxValue.push(shoppingCart[i])
    }
  }
  console.log("L'articolo più costo del carrello: ", maxValue[0])
}

maxShoppingCart(shoppingCart)

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(arr) {
  let lastAdded = []
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === shoppingCart[shoppingCart.length - 1])
      lastAdded.push(shoppingCart[i])
  }
  console.log("Ultimo articolo aggiunto: ", lastAdded[0])
}

latestShoppingCart(shoppingCart)

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
