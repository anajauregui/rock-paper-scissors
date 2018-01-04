const computerPlay = () => {
  const playerMoveArray = ['Rock', 'Paper', 'Scissors'];
  const randomMove = Math.floor(Math.random() * playerMoveArray.length)

  return playerMoveArray[randomMove]
}
console.log(computerPlay());

const play = (playerSelection, computerSelection) => {

  // let playerSelection = prompt('rock, paper, or scissors')
  // let computerSelection = computerPlay()

  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
    return 'TIE'
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
    return 'Paper beats Rock, try again...'
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
    return 'Rock beats Scissors, you win!'
  }

  if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper') {
    return 'TIE'
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
    return 'Paper beats Rock, you win!'
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
    return 'Scissors beats Paper, try again...'
  }

  if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors') {
    return 'TIE'
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
    return 'Rock beats Scissors, try again...'
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
    return 'Scissors beats Paper, you win!'
  }

}

// let playerSelection = prompt('rock, paper, or scissors')
// let computerSelection = computerPlay()
// console.log(play(playerSelection, computerSelection))
