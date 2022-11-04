let cards =[]
let sum = 0
let isAlive = false
let hasBlackjack = false
let message = ""
let playerEl = document.querySelector("#player-el")
let messageEl = document.querySelector("#res-msg")
let sumEl = document.querySelector("#sum")
let cardsEl = document.getElementById("cards")

let player = {
    name: "Keerthi",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips 

function startGame(){
    let firstCard = getRandomCard()
    isAlive = true
    cards = [firstCard]
    sum = firstCard
    renderGame()
}

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }
    if(randomNumber === 1){
        return 11
    }
    return randomNumber
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i< cards.length; i++){
        cardsEl.textContent += (cards[i] + " ")
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card? 🙂"
    }
    else if(sum == 21){
        message = "Wohoo!! You've got the Blackjack!! 🥳"
        hasBlackjack = true
    }
    else{
        message = "You are out of the game!! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive && !hasBlackjack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
