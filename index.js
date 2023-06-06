// Author: Michael Kolesidis
// Title: collection of div surrogates

// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
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

import "./style.scss";
import { WindowManager, dragElement } from "dom-window-manager";

// Word list
const words = [
  {
    rank: "1",
    word: "the",
  },
  {
    rank: "2",
    word: "be",
  },
  {
    rank: "3",
    word: "to",
  },
  {
    rank: "4",
    word: "of",
  },
  {
    rank: "5",
    word: "and",
  },
  {
    rank: "6",
    word: "a",
  },
  {
    rank: "7",
    word: "in",
  },
  {
    rank: "8",
    word: "that",
  },
  {
    rank: "9",
    word: "have",
  },
  {
    rank: "10",
    word: "I",
  },
  {
    rank: "11",
    word: "it",
  },
  {
    rank: "12",
    word: "for",
  },
  {
    rank: "13",
    word: "not",
  },
  {
    rank: "14",
    word: "on",
  },
  {
    rank: "15",
    word: "with",
  },
  {
    rank: "16",
    word: "he",
  },
  {
    rank: "17",
    word: "as",
  },
  {
    rank: "18",
    word: "you",
  },
  {
    rank: "19",
    word: "do",
  },
  {
    rank: "20",
    word: "at",
  },
  {
    rank: "21",
    word: "this",
  },
  {
    rank: "22",
    word: "but",
  },
  {
    rank: "23",
    word: "his",
  },
  {
    rank: "24",
    word: "by",
  },
  {
    rank: "25",
    word: "from",
  },
  {
    rank: "26",
    word: "they",
  },
  {
    rank: "27",
    word: "we",
  },
  {
    rank: "28",
    word: "say",
  },
  {
    rank: "29",
    word: "her",
  },
  {
    rank: "30",
    word: "she",
  },
  {
    rank: "31",
    word: "or",
  },
  {
    rank: "32",
    word: "an",
  },
  {
    rank: "33",
    word: "will",
  },
  {
    rank: "34",
    word: "my",
  },
  {
    rank: "35",
    word: "one",
  },
  {
    rank: "36",
    word: "all",
  },
  {
    rank: "37",
    word: "would",
  },
  {
    rank: "38",
    word: "there",
  },
  {
    rank: "39",
    word: "their",
  },
  {
    rank: "40",
    word: "what",
  },
  {
    rank: "41",
    word: "so",
  },
  {
    rank: "42",
    word: "up",
  },
  {
    rank: "43",
    word: "out",
  },
  {
    rank: "44",
    word: "if",
  },
  {
    rank: "45",
    word: "about",
  },
  {
    rank: "46",
    word: "who",
  },
  {
    rank: "47",
    word: "get",
  },
  {
    rank: "48",
    word: "which",
  },
  {
    rank: "49",
    word: "go",
  },
  {
    rank: "50",
    word: "me",
  },
  {
    rank: "51",
    word: "when",
  },
  {
    rank: "52",
    word: "make",
  },
  {
    rank: "53",
    word: "can",
  },
  {
    rank: "54",
    word: "like",
  },
  {
    rank: "55",
    word: "time",
  },
  {
    rank: "56",
    word: "no",
  },
  {
    rank: "57",
    word: "just",
  },
  {
    rank: "58",
    word: "him",
  },
  {
    rank: "59",
    word: "know",
  },
  {
    rank: "60",
    word: "take",
  },
  {
    rank: "61",
    word: "people",
  },
  {
    rank: "62",
    word: "into",
  },
  {
    rank: "63",
    word: "year",
  },
  {
    rank: "64",
    word: "your",
  },
  {
    rank: "65",
    word: "good",
  },
  {
    rank: "66",
    word: "some",
  },
  {
    rank: "67",
    word: "could",
  },
  {
    rank: "68",
    word: "them",
  },
  {
    rank: "69",
    word: "see",
  },
  {
    rank: "70",
    word: "other",
  },
  {
    rank: "71",
    word: "than",
  },
  {
    rank: "72",
    word: "then",
  },
  {
    rank: "73",
    word: "now",
  },
  {
    rank: "74",
    word: "look",
  },
  {
    rank: "75",
    word: "only",
  },
  {
    rank: "76",
    word: "come",
  },
  {
    rank: "77",
    word: "its",
  },
  {
    rank: "78",
    word: "over",
  },
  {
    rank: "79",
    word: "think",
  },
  {
    rank: "80",
    word: "also",
  },
  {
    rank: "81",
    word: "back",
  },
  {
    rank: "82",
    word: "after",
  },
  {
    rank: "83",
    word: "use",
  },
  {
    rank: "84",
    word: "two",
  },
  {
    rank: "85",
    word: "how",
  },
  {
    rank: "86",
    word: "our",
  },
  {
    rank: "87",
    word: "work",
  },
  {
    rank: "88",
    word: "first",
  },
  {
    rank: "89",
    word: "well",
  },
  {
    rank: "90",
    word: "way",
  },
  {
    rank: "91",
    word: "even",
  },
  {
    rank: "92",
    word: "new",
  },
  {
    rank: "93",
    word: "want",
  },
  {
    rank: "94",
    word: "because",
  },
  {
    rank: "95",
    word: "any",
  },
  {
    rank: "96",
    word: "these",
  },
  {
    rank: "97",
    word: "give",
  },
  {
    rank: "98",
    word: "day",
  },
  {
    rank: "99",
    word: "most",
  },
  {
    rank: "100",
    word: "us",
  },
];

// Window manager
let windowManager = new WindowManager();

// Shake button
const shakeButton = document.createElement("div");
shakeButton.classList.add("button");
shakeButton.innerHTML = `▶`;
shakeButton.style.position = `absolute`;
shakeButton.style.zIndex = `2147483638`;
document.body.appendChild(shakeButton);

// Stop button
const stopButton = document.createElement("div");
stopButton.classList.add("button");
stopButton.setAttribute("id", "stop-button");
stopButton.innerHTML = `◼`;
stopButton.style.position = `absolute`;
stopButton.style.zIndex = `2147483638`;
document.body.appendChild(stopButton);

// Source button
const sourceButton = document.createElement("div");
sourceButton.classList.add("button");
sourceButton.setAttribute("id", "source-button");
sourceButton.innerHTML = `collection of div surrogates`;
sourceButton.style.position = `absolute`;
sourceButton.style.zIndex = `2147483638`;
document.body.appendChild(sourceButton);
sourceButton.addEventListener("click", () => {
  window.open("https://michaelkolesidis.com");
});

// Create frames
const numberOfFrames = 300;

for (let i = 0; i < numberOfFrames; i++) {
  const frame = document.createElement("div");

  const widthMin = 95;
  const widthMax = 300;
  const frameWidth = Math.floor(
    Math.random() * (widthMax - widthMin) + widthMin
  );
  const heightMin = 50;
  const heightMax = widthMax;
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

  frame.classList.add("window");
  frame.style.position = "absolute";
  frame.innerHTML = /* html */ `${words[i % words.length]["word"]}`;
  document.body.appendChild(frame);

  dragElement(frame);
  frame.style.zIndex = windowManager.base;
  frame.addEventListener("mousedown", () => {
    frame.style.zIndex = windowManager.moveOnTop();
    frame.style.backgroundColor = `#1c1c1c`;
    frame.style.color = `#ffffff`;
  });

  shakeButton.addEventListener("click", () => {
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

    stopButton.addEventListener("click", () => {
      animate = () => {};
    });
  });
}
