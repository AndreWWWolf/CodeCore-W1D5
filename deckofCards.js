class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
    }

    // Will reset a shuffled deck back to HSCD A-K ordered.
    reset(){
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  
    // Will create a shuffled and randomly ordered deck.
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
    }
  

    draw(){
      return this.deck.pop();
    }
  }
  
  const deck1 = new Deck();
  console.log(deck1.deck);
  deck1.reset();
  console.log(deck1.deck);


  