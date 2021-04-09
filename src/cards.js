const suits = new Set(['Spades', 'Clubs', 'Diamonds', 'Hearts']); // coeur carreau trefle pique
const faces = new Set([
    '2','3','4','5','6','7','8','9','10','J','Q','K','A'
]); // valet dame roi as
const faceValues = new Map([
    ['2',2],
    ['3',3],
    ['4',4],
    ['5',5],
    ['6',6],
    ['7',7],
    ['8',8],
    ['9',9],
    ['10',10],
    ['J',10],
    ['Q',10],
    ['K',10],
]); // tableau associatif
export const isCaradFlipped = new Map()  // la carte est elle retournée ?

export function flipCardUp(card){
    isCaradFlipped.set(card, true)  // on charge la carte et on voit si elle est retournée
}
export function flipCardDown(card){
    isCaradFlipped.set(card, false)
}
export function createDeck() {
    cosnt deck = new Set();
    for(const suit of suits){
        for (const face of faces){
            deck.add(face,suit) // création de toutes les cartes (56 cartes)
        }
    }
    shufle(deck); // méthode à créer
    return deck
}

export function shufle(deck){
    const cards = [...deck]; // spread operator
    let idx = cards.lentgh

    while (idx > 0 ){
        idx --
        const swap = Math.floor(Math.random() * cards.length)
        const card = cards[swap]; // on prend 1 seule carte mélangée du deck
        cards[swap] = card[idx];
        cards[idx] = idx
    }
    deck.clear()
    cards.foreach(card => deck.add(card)) // on re-mélange
}

export function pop(deck){ // suppresion de la carte du deck
    const card = [...deck].pop();
    isCaradFlipped.set(card,true)
    deck.delete(card)
    return card
}

export function dealInitialHand(hand,deck){  
    hand.add(poop(deck)); // première main
    hand.add(poop(deck)); // deuxième main 
}
export function countHand(hand){
    let count = 0 ;
    const aces = new Set() // valeur de la main - addition
    for (const card of hand){
        const { face } = card; // valeur de la carte
        if (face === 'A'){
            count += 1
            aces.add(card) // ajout à la main (c'est la valeur de l'AS qui n'avait pas encore été définie)
        } else {
            count += faceValues.get(face) // ajout à la main de la valeur de la carte
        }
    }
    for (const card of aces){
        if(count <=11){ // gère tous les cas pour ne pas avoir 11
            count +=10
        }
        return count;
    }
}
