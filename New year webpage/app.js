"use strict";

let mp3 = document.querySelector("#audio");

mp3.play();
setInterval(() => {
  mp3.play();
}, 1000);
