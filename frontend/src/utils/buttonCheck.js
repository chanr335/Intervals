function buttonCheck(state, answer) {
  let correct = false;
  if (state === answer) {
    correct = true;
  }
  return correct;
}

export default buttonCheck;
