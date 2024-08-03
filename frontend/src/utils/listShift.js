function listShift(rootNote) {
  const notes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  const newNotes = notes;

  //calculate the interval according to the root note
  for (let i = rootNote; i < notes.length; i += 1) {
    newNotes.unshift(newNotes.pop());
  }

  return newNotes;
}

export default listShift;
