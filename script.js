let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgconatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let container=document.querySelector(".container");
let change=document.querySelector(".change");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.classList.add("change"); 
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("change1"); 
            turnO = true;
        }

        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !checkWinner()) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgconatiner.classList.remove("hide");
    container.classList.add("hide");
    reset.classList.add("hide");
    disableBoxes();
  };
const resetGame=()=>{
    turnO=true;
    count=0;
    container.classList.remove("hide");
    reset.classList.remove("hide");
    enableBoxes();
    msgconatiner.classList.add("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, the Winner is ${winner}`;
    container.classList.add("hide");
    reset.classList.add("hide");
    msgconatiner.classList.remove("hide");
    disableBoxes();
    
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
                showWinner(boxes[pattern[0]].innerText);
                return true;
            }
        }
    }
}
reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);