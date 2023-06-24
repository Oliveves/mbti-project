import { results, mbtis } from "./data.js";

const mbti = new URLSearchParams(location.search).get("mbti")
const result = results[mbtis[mbti]]

const titleEl = document.querySelector(".page-title")
const characterEl = document.querySelector(".character")