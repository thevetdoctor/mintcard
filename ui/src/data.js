let cardCollection = [];
const suits = ['S', 'D', 'H', 'C'];
const digits = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'K', 'J', 'Q'];

for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j < digits.length; j++) {
        cardCollection.push(`${digits[j]}${suits[i]}`);
    }
}

const playerOne = [];
const playerTwo = [];
let first = true;

export const deriveCardValue = (tag) => {
    return digits.indexOf(tag[0]) + 1;
}
cardCollection = cardCollection.map(card => (
    {
        tag: card,
        value: deriveCardValue(card),
        flipState: true
    }
));

const dealCards = () => {
    for(let x = cardCollection.length; x > 0; x--) {
        const randomIndex = Math.floor(Math.random() * x);
        if(first) {
            playerOne.push(cardCollection[randomIndex]);
        } else {
            playerTwo.push(cardCollection[randomIndex]);
        }
        first =!first;
        cardCollection.splice(randomIndex, 1);
    }
    return [playerOne, playerTwo];
}

export default dealCards;
