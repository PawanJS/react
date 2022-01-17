'use strict';
//* Get our elements
const video = document.querySelector('.video-player');
const button = document.querySelector('.js-video-btn');

//* Build our functions
const togglePlay = () => {
  //* Modern way
  const method = video.paused ? 'play' : 'pause';
  const style = video.paused ? 'none' : 'block';

  video[method]();
  button.style.display = style;

  //* old way
  //   if (video.paused) {
  //     video.play();
  //     button.style.display = 'block';
  //   } else {
  //     video.pause();
  //     button.style.display = 'none';
  //   }
};

//* Hook up event listeners
video.addEventListener('click', togglePlay);
button.addEventListener('click', togglePlay);
