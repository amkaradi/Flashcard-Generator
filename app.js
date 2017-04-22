// Instructions

// Create a new GitHub repository, named Flashcard-Generator or something similar. Clone this to your local drive. (done)
// Create a new file named BasicCard.js (Done)

// This file should define a Node module that exports a constructor for creating basic flashcards, 
// e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.

// Create a new file named ClozeCard.js:
// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, 
// e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
// The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, 
// feel free to try your hand at implementing a front-end, as well.

// var FlashCard = function (Q, A){
//   this.Q = Q;
//   this.A = A;
// };






// var cardProperties = {
//   Q : '',
//   A : '',
// };


// var NewCard = new Card ('', ''){
//   this.Q = Q;
//   this.A = A;
// }


// //Blueprint
// class BasicCard {

//   constructor(front, back) { 
//     this.front = front;
//     this.back = back;
//   }

//   flip() {
//     console.log('Back of the card: ', this.back);
//   }

//   show() {
//     console.log('Front of the card: ', this.front);
//   }
// }

