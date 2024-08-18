import * as Tone from "tone";

//Function for playing intervals
/*
 * gamemode: gamemode chosen by user
 * newNoteList: new note list generated by listShift.js
 * rootNote: root note generated by randomizer in Game.jsx
 * intNote: interval note generated by randomizer in Game.jsx
 */
function playInterval(gamemode, newNoteList, rootNote, intNote) {
  //set up note player
  const synth = new Tone.Synth().toDestination();
  Tone.getTransport().start();

  //Play the rootNote
  Tone.getTransport().schedule((time) => {
    synth.triggerAttackRelease(newNoteList[rootNote][0] + "4", "8n", time);
  }, "+0"); // 0 seconds from now

  //Depending on the gamemode, logic will change for interval note pitch
  if (gamemode === "Ascending") {
    if (newNoteList[intNote][1] < newNoteList[rootNote][1]) {
      Tone.getTransport().schedule((time) => {
        synth.triggerAttackRelease(newNoteList[intNote][0] + "5", "8n", time);
      }, "+1"); // 1 second from now
    } else {
      Tone.getTransport().schedule((time) => {
        synth.triggerAttackRelease(newNoteList[intNote][0] + "4", "8n", time);
      }, "+1"); // 1 second from now
    }
  } else if (gamemode === "Descending") {
    if (newNoteList[intNote][1] > newNoteList[rootNote][1]) {
      Tone.getTransport().schedule((time) => {
        synth.triggerAttackRelease(newNoteList[intNote][0] + "3", "8n", time);
      }, "+1"); // 1 second from now
    } else {
      Tone.getTransport().schedule((time) => {
        synth.triggerAttackRelease(newNoteList[intNote][0] + "4", "8n", time);
      }, "+1"); // 1 second from now
    }
  }
}

export default playInterval;
