const body = document.querySelector("body");
const div1 = document.createElement("div");
div1.id = "playArea";
document.body.append(div1);
const playerChar = document.createElement("div");
playerChar.id="Player1";
playerChar.style.bottom = "0px";
playerChar.style.left = "200px";
div1.append(playerChar);
