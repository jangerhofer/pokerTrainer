const _ = require('lodash')

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

class Card {
    constructor({suit, value}) {
        this.suit = suit
        this.value = value
    }
    
    toString() {
        return `${values[this.value]} of ${suits[this.suit]}`
    }
}

class Deck {
    constructor() {
      this.deck = [];
  
      _.range(4).map(suit => {
          _.range(13).map(value => {
            this.deck.push(new Card({suit, value}));
          })
      })
        
    }

    toString() {
        return this.deck.map(card => card.toString())
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
      
        return this;
      }

      deal(numCards = 1) {
          
      }
  }

  class Hand {
      constructor({cards} = {}) {
          this.cards = cards
      }
      
      addCards(cardsList) {
          this.cards.concat(cardsList)
          this.sortHand()
      }

      sortHand() {
          this.cards = _.sortBy(this.cards, (card) => card.value)
      }
  }

  const deck = new Deck();
  const board = new Hand()
  const hand = new Hand()
  
  deck.shuffle()

  hand.addCards(deck.deal(2))





  