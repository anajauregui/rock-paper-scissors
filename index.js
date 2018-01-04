const computerPlay = () => {
  const playerMoveArray = ['Rock', 'Paper', 'Scissors'];
  let randomMove = Math.floor(Math.random() * playerMoveArray.length)
  return playerMoveArray[randomMove]
}


//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)




const play = (playerSelection, computerSelection) => {

  if(playerSelection.toLowerCase() === 'rock') {
    if(computerSelection === 'Rock') {
      return 'TIE'
    } else if (playerSelection.toLowerCase() === 'rock') {
      if(computerSelection === 'Paper') {
        return 'paper beats rock, try again'
      }
    } else {
      'Rock beats Scissors, you win!'
    }
  }

  if(playerSelection.toLowerCase() === 'paper') {
    if(computerSelection === 'Paper') {
      return 'TIE'
    } else if (playerSelection.toLowerCase() === 'paper') {
      if(computerSelection === 'Rock') {
        return 'paper beats rock, you win!'
      }
    } else {
      'Scissors beats paper, try again...'
    }
  }

    if(playerSelection.toLowerCase() === 'scissors') {
      if(computerSelection === 'Scissors') {
        return 'TIE'
      } else if (playerSelection.toLowerCase() === 'scissors') {
        if(computerSelection === 'Rock') {
          return 'Rock beats scissors, try again...'
        }
      } else {
        'Scissors beats paper, you win!'
      }
    }
}

let playerSelection = prompt('rock, paper, or scissors')
let computerSelection = computerPlay()
console.log(play(playerSelection, computerSelection))
