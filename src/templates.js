import { isCaradFlipped } from "./cards";
function suitIcon(card) {
    const Spades = '\u2660';
    const Clubs = '\u2663'
    const Diamonds = '\u2666'
    const Hearts = '\u2665'
    return {Spades, Clubs, Diamonds, Hearts}[card.suit]
}

function getCSSClass(card){
    return `
    card
    ${card.suit.toLowersCase()}
    ${isCaradFlipped.get(card) && 'flipped'}
    `
}

export const cardTemplate = card => { // si la carte est retournée alors le template apparait
    `<div class="${getCSSClass(card)}">
    <div class="back"> \uD83D\uDC09</div>
        <div class="front" data-suit="${suitIcon(card)}" data-face="${card.face}">
            ${card.face}
        </div>
    </div>`
}
