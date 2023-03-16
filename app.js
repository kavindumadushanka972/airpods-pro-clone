// INTRO SECTION

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// END SECTION
const section = document.querySelector('section');
const video2 = section.querySelector('video');
const end = section.querySelector('h1');

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

// TEXT ANIMATION
const textAnim = TweenMax.fromTo(text, 5, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: section,
  triggerHook: 0
})
  .addIndicators()
  .setPin(section)
  .addTo(controller);

// VIDEO ANIMATION
let accelamount = 0.1; // easing the stop smoothly
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.37783);
// 33.3 = 1000 / 30 (100 / frame rate of the video)

let accelamount2 = 0.1; // easing the stop smoothly
let scrollpos2 = scrollpos;
let delay2 = 0;

scene3.on('update', e => {
  scrollpos2 = e.scrollPos / 1000;
})

setInterval(() => {
  delay2 += (scrollpos2 - delay2) * accelamount2;
  video2.currentTime = delay2;
}, 33.37783);