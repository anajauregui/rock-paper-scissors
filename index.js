const computerPlay = () => {
  const playerMoveArray = ['Rock', 'Paper', 'Scissors'];
  let randomMove = Math.floor(Math.random() * playerMoveArray.length)
  return playerMoveArray[randomMove]
}

console.log(computerPlay());
