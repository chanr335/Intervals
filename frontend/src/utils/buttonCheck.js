//Checks if the state vs answer is equal
function buttonCheck(state, answer) {
  let correct = false;
  if (state === answer) {
    correct = true;
  }
  return correct;
}

export default buttonCheck;
