let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;



const winPatterns = [
[0,1,2],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[6,7,8],
[3,4,5],
[2,4,6],

];

const resetGame =() => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");


};




boxes.forEach((box)=>{
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turn0) {
            box.innerText = "O";
            turn0 = false;

        }
        else {
            box.innerText = "X";
            turn0 = true;
        }

        
        box.disabled = true;



        checkWinner();


    });
    
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;

        box.innerText = "";

    }


}

 const showWinner = (Winner) => {
msg.innerText = `Congratulations! Winner is ${Winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
 };

const checkWinner =() =>{
for(let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
let pos1Va2 = boxes[pattern[1]].innerText;
let pos1Va3 = boxes[pattern[2]].innerText;

if (pos1Val != "" && pos1Va2 !="" && pos1Va3 !="") {
    if(pos1Val === pos1Va2 &&  pos1Va2 === pos1Va3) {
        console.log("WINNER!",pos1Val);
        showWinner(pos1Val);
    }
}


}
};

newGamebtn.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);

