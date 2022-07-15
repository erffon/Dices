const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const button = document.querySelector(".myButton");
const output = document.querySelector(".output");

button.addEventListener("click",dice);
function dice(){
    let rolls = [roll(6),roll(6)];
    player1.innerHTML = `<h2 class="dice">&#x268${rolls[0]-1};</h2>`;
    player2.innerHTML = `<h2 class="dice">&#x268${rolls[1]-1};</h2>`;
    console.log(rolls);
    let message;
    if (rolls[0]==rolls[1]){
        message = "draw";
    } else if (rolls[0]> rolls[1]){
        message = " CPU wins";
    } else{
        message = "You win";
    }
    output.innerText = message;

}
function roll (num){
    let numbers = Math.floor(Math.random()*num)+1;
    return numbers;
}

