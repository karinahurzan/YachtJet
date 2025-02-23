"use strict";

const burger = document.querySelector(".burger-button");
const close = document.querySelector(".burger-button-menu");

const menu = document.querySelector(".modal-overlay");

let opened = false;

burger.addEventListener("click", (event) => menu.classList.add("is-open"));

close.addEventListener("click", (event) => menu.classList.remove("is-open"));

const href = document.querySelectorAll(".menu-list-item");

[...href].forEach((el) =>
  el.addEventListener("click", (event) => menu.classList.remove("is-open"))
);
