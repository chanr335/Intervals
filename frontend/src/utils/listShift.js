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
    "E#",
    "F",
    "F#",
    "G",
    "G#",
  ];
  const newNotes = notes;

  //calculate the interval according to the root note
  for (let i = rootNote; i < length(notes); i += 1) {
    newNotes.push(newNotes.shift());
  }

  return newNotes;
}

export default listShift;
