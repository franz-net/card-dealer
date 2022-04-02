const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']

export function GetHand(nCards=2) {
    const cardsA = []
    for (let i = 0; i < nCards; i++){
            const hand = {
                "card" : cards[Math.floor(Math.random() * cards.length)],
                "suit": suits[Math.floor(Math.random() * suits.length)]
            }
            cardsA.push(hand)
        }
    return cardsA
}