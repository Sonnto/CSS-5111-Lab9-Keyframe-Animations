let playPause = document.getElementById("play-pause-btn");

/* Animation-related events are:
 * - animationstart: when it first starts
 * -  animationiteration: whenever animation loops
 * - animationend: when animation finishes
 */

playPause.addEventListener("click", function () {
  if (
    sun.style.animationPlayState === "running" &&
    sky.style.animationPlayState === "running"
  ) {
    sun.style.animationPlayState = "paused";
    sky.style.animationPlayState = "paused";
  } else {
    sun.style.animationPlayState = "running";
    sky.style.animationPlayState = "running";
  }
});
