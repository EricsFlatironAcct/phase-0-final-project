const body = document.querySelector("body");
const div1 = document.createElement("div");
div1.id = "playArea";
document.body.append(div1);
const playerChar = document.createElement("div");
playerChar.id="Player1";
playerChar.style.bottom = "1px";
playerChar.style.left = "195px";
div1.append(playerChar);
const AIChar = document.createElement("div");
AIChar.id="Player2";
AIChar.style.bottom = "1px";
AIChar.style.left = "295px";
div1.append(AIChar);

function moveLeft() {
    const PleftNumbers = playerChar.style.left.replace("px", "");
    const Pleft = parseInt(PleftNumbers, 10);
    const AleftNumbers = AIChar.style.left.replace("px","");
    const Aleft = parseInt(AleftNumbers, 10);
    if (Pleft > 0) {
      playerChar.style.left = `${Pleft - 1}px`;
      AIChar.style.left = `${Aleft + 1}px`;
    }
  }
function moveRight(){
    const PleftNumbers = playerChar.style.left.replace("px", "");
    const Pleft = parseInt(PleftNumbers, 10);
    const AleftNumbers = AIChar.style.left.replace("px","");
    const Aleft = parseInt(AleftNumbers, 10);
    if (Pleft < 240) {
      playerChar.style.left = `${Pleft + 1}px`;
      AIChar.style.left = `${Aleft - 1}px`;
    }
  } 
  function moveUp(){
    const bottomNumbers = playerChar.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom < 490) {
      playerChar.style.bottom = `${bottom + 1}px`;
      AIChar.style.bottom = `${bottom + 1}px`;
    }
  }
  function moveDown(){
    const bottomNumbers = playerChar.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom >0) {
      playerChar.style.bottom = `${bottom - 1}px`;
      AIChar.style.bottom = `${bottom - 1}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {moveLeft();}
    if (e.key === "ArrowRight"){moveRight();}
    if (e.key === "ArrowUp"){moveUp();}
    if (e.key === "ArrowDown"){moveDown();}
  });
  