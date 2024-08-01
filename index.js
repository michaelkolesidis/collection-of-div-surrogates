// Author: Michael Kolesidis
// Title: collection of div surrogates

// Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
// https://michaelkolesidis.com/

// Reproduction of any of the artwork on this website
// for commercial use is not permitted without first
// receiving written permission from the artist. You
// cannot host, display, distribute or share this Work
// in any form, including physical and digital. You
// cannot use this Work in any commercial or non-commercial
// product, website or project. You cannot sell this Work and
// you cannot mint an NFTs of it.

// Under the Copyright Law, it is fair use to reproduce a single
// copy for personal or educational purposes, provided that no
// changes are made to the content and provided that a copyright
// notice attesting to the content is attached to the reproduction.
// Beyond that, no further copies of works of art may be made or
// distributed on this website without written permission.

import './style.scss';
import { WindowManager, dragElement } from 'dom-window-manager';
import { words } from './wordList';
import { colorPalette } from './colorPalette';

// Window manager
let windowManager = new WindowManager();

// Shake button
const shakeButton = document.createElement('div');
shakeButton.classList.add('button');
shakeButton.innerHTML = `▶`;
shakeButton.style.position = `absolute`;
shakeButton.style.zIndex = `2147483638`;
document.body.appendChild(shakeButton);

// Stop button
const stopButton = document.createElement('div');
stopButton.classList.add('button');
stopButton.setAttribute('id', 'stop-button');
stopButton.innerHTML = `◼`;
stopButton.style.position = `absolute`;
stopButton.style.zIndex = `2147483638`;
document.body.appendChild(stopButton);

// Source button
const sourceButton = document.createElement('div');
sourceButton.classList.add('button');
sourceButton.setAttribute('id', 'source-button');
sourceButton.innerHTML = `collection of div surrogates`;
sourceButton.style.position = `absolute`;
sourceButton.style.zIndex = `2147483638`;
document.body.appendChild(sourceButton);
sourceButton.addEventListener('click', () => {
  window.open('https://michaelkolesidis.com');
});

// Create frames
const numberOfFrames = 600;

for (let i = 0; i < numberOfFrames; i++) {
  const frame = document.createElement('div');

  const widthMin = 100;
  const widthMax = 300;
  const frameWidth = Math.floor(
    Math.random() * (widthMax - widthMin) + widthMin
  );
  const heightMin = 70;
  const frameHeight = Math.floor(
    Math.random() * (widthMax - heightMin) + heightMin
  );
  const frameLeft = Math.floor(
    Math.random() * (window.innerWidth + widthMin) - widthMin
  );
  const frameTop = Math.floor(
    Math.random() * (window.innerHeight + heightMin) - heightMin
  );
  frame.style.width = `${frameWidth}px`;
  frame.style.height = `${frameHeight}px`;
  frame.style.top = `${frameTop}px`;
  frame.style.left = `${frameLeft}px`;

  frame.classList.add('window');
  frame.style.position = 'absolute';

  const backgroundColor = `#${
    colorPalette[Math.floor(Math.random() * colorPalette.length)]
  }`;

  frame.style.backgroundColor = backgroundColor;

  frame.innerHTML = `${words[i % words.length]['word']}`;
  document.body.appendChild(frame);

  dragElement(frame);
  frame.style.zIndex = windowManager.base;
  frame.addEventListener('mousedown', () => {
    frame.style.zIndex = windowManager.moveOnTop();
    frame.style.backgroundColor = `#1c1c1c`;
    frame.style.color = `#ffffff`;
  });

  shakeButton.addEventListener('click', () => {
    const startTime = new Date();

    let animate = () => {
      const endTime = new Date();
      const elapsedTime = endTime - startTime;

      frame.style.top = `${frameTop + elapsedTime * 0.00075 * Math.random()}px`;
      frame.style.left = `${
        frameLeft + elapsedTime * 0.00075 * Math.random()
      }px`;

      window.requestAnimationFrame(animate);
    };

    animate();

    stopButton.addEventListener('click', () => {
      animate = () => {};
    });
  });
}
