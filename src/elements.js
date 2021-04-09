import { cardTemplate } from "./templates";

import { countHand } from "./cards";

const app = document.querySelector('#black-jack');
const statusE1 = app.querySelector('.status')

export const dealerE1 = app.querySelector('.dealer')
export const playerE1 = app.querySelector('.player')
export const buttonE1 = app.querySelector('.buttons')


export function domNode(str){
    const template = document.createElement('template');

    template.innerHTML = str;
    return template.content.firstChild
}


export function render(element, hand) {
    element.querySelector('.hand').innerHTML = [...hand].map(cardTemplate).join('') // pour que les cartes soient les unes à côté des autres
    element.querySelector('.score').innerHTML = countHand(hand)
    updateLabel(element, hand)
}


export function addcard(element, hand, card) {
    hand.add(card)
    const cardNode = domNode(cardTemplate(card))
    element.querySelector('.hand').classList.add("adding")
    element.querySelector('.hand').appendChild(cardNode);
    element.querySelector('score').innerHTML = countHand(hand)
    setTimeout( () => element.querySelector('.hand').classList.remove('adding'), 10)
}