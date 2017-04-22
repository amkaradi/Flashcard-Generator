//Blueprint
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


//Instances
var card1 = new BasicCard("WWhich of the great lakes does not share a border with Canada?", "Lake Michigan");

var cadr2 = new BasicCard("What is the largest island in the Caribbean Sea?", "Cuba");

var cadr3 = new BasicCard("What are the five boroughs of New York City?", "Manhattan, the Bronx, Queens, Brooklyn, and Staten Island");



console.log(card1);
console.log(card2);
console.log(card3);

card1.show();
card1.flip();

cadr2.show();
cadr2.flip();

// Book function is a "Constructor"
function Book(title, author, content) { //Blueprint, a Book Class
	this.title = title;
	this.author = author;
	this.content = content;

	this.currentPage = 0;
}

Book.prototype.read = function() {
	this.currentPage += 1;
}

var twnty_thousand_leagues = new Book("20 Thousand leagues under the sea", " Jules Verne", "CHAPTER 1 ....");
var captain_nemo = new Book('Captain Nemo', 'Jules Verne', "");

captain_nemo.read();
captain_nemo.read();
captain_nemo.read();

console.log(captain_nemo);
console.log(twnty_thousand_leagues);

console.log(captain_nemo.author);

//ES5
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}
// A whole bunch code here



BasicCard.prototype.flip = function() {
	console.log('Back of the card:', this.back);
}

//ES6
