function letsSpeak() {
  let sentenceTest = document.getElementById('theText');
  console.log(sentenceTest.value);
  var u1 = new SpeechSynthesisUtterance(sentenceTest.value);
  u1.lang = 'en-US';
  u1.pitch = 1;
  u1.rate = 1.5;
  u1.voiceURI = 'native';
  u1.volume = 1;
  speechSynthesis.speak(u1);
}

function letsSpeakSecond() {
  let sentenceTest = document.getElementById('birfButton');
  console.log(sentenceTest);
  console.log(sentenceTest.value);
  var u1 = new SpeechSynthesisUtterance(sentenceTest.value);
  u1.lang = 'en-US';
  u1.pitch = 1;
  u1.rate = 0.01;
  u1.voiceURI = 'native';
  u1.volume = 1;
  speechSynthesis.speak(u1);
}
