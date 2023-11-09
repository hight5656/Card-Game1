let userWins = 0;
let computerWins = 0;
let round = 0;
let userName = "User";

const cards = [
    { name: "6", value: 6, image: "6.png" },
    { name: "7", value: 7, image: "7.png" },
    { name: "8", value: 8, image: "8.png" },
    { name: "9", value: 9, image: "9.png" },
    { name: "10", value: 10, image: "10.png" },
    { name: "Jack", value: 2, image: "jack.png" },
    { name: "Queen", value: 3, image: "queen.png" },
    { name: "King", value: 4, image: "king.png" },
    { name: "Ace", value: 11, image: "ace.png" },
];

document.getElementById('start-button').addEventListener('click', startGame);

function displayCard(player, card) {
    const cardImage = document.querySelector(`#${player}-card-image`);
    const scoreContainer = document.querySelector(`#${player} .score-container .score`);
    const totalSumContainer = document.querySelector(`#${player} .total-sum-container .total-sum`);

    cardImage.style.height = "200px";
    cardImage.src = card.image;
    scoreContainer.textContent = card.value;

    const currentSum = parseInt(totalSumContainer.textContent) + card.value;
    totalSumContainer.textContent = currentSum;
}

function startGame() {
    let userInput = prompt("Enter your name:");
    if (userInput !== null && userInput.length > 0) {
        userName = userInput;
    }
    document.querySelector('#user h2').textContent = userName;
    resetGame();
    userWins = 0;
    computerWins = 0;
    round = 0;
    document.getElementById('generate-button').style.display = 'inline';
    document.getElementById('start-button').style.display = 'none';
}

function playRound() {
    
    const userNumber = Math.floor(Math.random() * cards.length);
    const computerNumber = Math.floor(Math.random() * cards.length);

    let userCard = cards[userNumber];
    let computerCard = cards[computerNumber];

    displayCard('user', userCard);
    displayCard('computer', computerCard);

    if (userCard.value > computerCard.value) {
        userWins++;
    } else if (userCard.value < computerCard.value) {
        computerWins++;
    }

    document.querySelector("#user .score").textContent = userWins;
    document.querySelector("#computer .score").textContent = computerWins;

    round++;

    if (round === 3) {
        document.getElementById('generate-button').style.display = 'none';
        document.getElementById('start-button').style.display = 'inline';
        setTimeout(endGame,1000);
    }
}

function endGame() {
    if (userWins > computerWins) {
        alert(userName + " виграв гру!");
    } else if (computerWins > userWins) {
        alert("Комп'ютер виграв гру!");
    } else {
        alert("Нічия! Рахунок: " + userWins + " : " + computerWins);
    }

    resetGame();
}

function resetGame() {
    document.querySelector("#user .score").textContent = '0';
    document.querySelector("#computer .score").textContent = '0';

    const userTotalSum = document.querySelector("#user .total-sum-container .total-sum");
    const computerTotalSum = document.querySelector("#computer .total-sum-container .total-sum");

    userTotalSum.textContent = '0';
    computerTotalSum.textContent = '0';
}
