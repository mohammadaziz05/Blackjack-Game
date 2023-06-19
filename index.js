// javascript
let player = {
    name : "Xyz",
    points : 0
}
let cards = [];
let sum = 0;
let message = "";
let hasBlackjack = false;
let isAlive = false;

//Getting elements from HTML

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
let newCardBtn = document.getElementById("newcard-btn");

playerEl.textContent = player.name + "   : " + player.points + " points";

//functions

//To get random Number
function getRandomCard () {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10) {
        return 11;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else {
        return randomNumber;
    }
    
}

//To start game

function startGame () {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

//To render game

function renderGame () {
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: " + sum;
    //using loop to render all the cards
    for (let i = 0; i < cards.length; i++){
         cardsEl.textContent += cards[i] + " ";         
    }
    
    if (sum <=20){
        message = "Do you want to draw a card?";
        
    }
    else if (sum === 21) {
        message = "You've got a Blackjack!";
        hasBlackjack = true;
        player.points += sum;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}

//To get new card

function newCard () {
    if(isAlive === true && hasBlackjack === false){        
        let thirdCard = getRandomCard();
        sum +=thirdCard;
        cards.push(thirdCard);        
        renderGame();
    }   
    
}