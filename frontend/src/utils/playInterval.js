import * as Tone from "tone";

function playInterval(newNoteList, rootNote, intNote) {
  const synth = new Tone.Synth().toDestination();
  Tone.getTransport().start();
  //Play the notes
  Tone.getTransport().schedule((time) => {
    synth.triggerAttackRelease(newNoteList[rootNote] + "4", "8n", time);
  }, "+0"); // 0 seconds from now

  Tone.getTransport().schedule((time) => {
    synth.triggerAttackRelease(newNoteList[intNote] + "5", "8n", time);
  }, "+1"); // 1 second from now
}

export default playInterval;
