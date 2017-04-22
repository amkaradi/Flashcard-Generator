// This file should define a Node module that exports a constructor for creating basic flashcards, 
// e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.
class BasicCard {

  constructor(front, back) { 
    this.front = front;
    this.back = back;
  }

  flip() {
    console.log('Back of the card: ', this.back);
  }

  show() {
    console.log('Front of the card: ', this.front);
  }
}

// my instances
var card1 = new FlashCard("Which of the great lakes does not share a border with Canada?", "Lake Michigan");
var cadr2 = new FlashCard("What is the largest island in the Caribbean Sea?", "Cuba");
var cadr3 = new FlashCard("What are the five boroughs of New York City?", "Manhattan, the Bronx, Queens, Brooklyn, and Staten Island");

console.log(card1);
console.log(card2);
console.log(card3);

// card1.show();
// card1.flip();

// cadr2.show();
// cadr2.flip();

// cadr3.show();
// cadr3.flip();

// for(var content of flashcards.cards) {
// 	var card = new BasicCard(content.question, content.answer);
// }






//{
//	data: "things",
//	method: function() { doSomething(); }
//}

// //Hash
// var flashcards = {
//     "title": "flashcards",
//     "cards":
//     [
//         {
//             "question": "Which of the great lakes does not share a border with Canada?",
//             "answer": "Lake Michigan"
//         },
//         {
//             "question": "What is the national language of India?",
//             "answer": "Hindi"
//         }, {
//             "question": "What is the largest island in the Caribbean Sea?",
//             "answer": "Cuba"
//         }, {
//             "question": "What are the five boroughs of New York City?",
//             "answer": "Manhattan, the Bronx, Queens, Brooklyn, and Staten Island"
//         }, {
//             "question": "What city is the capital of China?",
//             "answer": "Beijing"
//         }
//     ]
// };