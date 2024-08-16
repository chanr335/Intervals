function listShift(rootNote) {
  const notes = [
    ["C", 0],
    ["C#", 1],
    ["D", 2],
    ["D#", 3],
    ["E", 4],
    ["F", 5],
    ["F#", 6],
    ["G", 7],
    ["G#", 8],
    ["A", 9],
    ["A#", 10],
    ["B", 11],
  ];
  const newNotes = notes;

  //calculate the interval according to the root note
  for (let i = rootNote; i < notes.length; i += 1) {
    newNotes.unshift(newNotes.pop());
  }

  return newNotes;
}

export default listShift;
