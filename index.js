var boxes = document.querySelectorAll(".box");
var restartBtn = document.getElementById("restart");
let firstPlayer = true;
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var box9 = document.getElementById("box9")
var cross = document.querySelector(".cross")

for (let index = 0; index < boxes.length; index++) {
    boxes[index].addEventListener("click", ()=>{
        if (boxes[index].innerHTML == "X" || boxes[index].  innerHTML == "O") {
            return boxes[index].innerHTML;
        }else{
            if (firstPlayer == true) {
                boxes[index].innerHTML = "O"
                firstPlayer = false;
            }else{
                boxes[index].innerHTML = "X"
                firstPlayer = true;
            }
        };
        checkWinner()
    });
    
}
function checkWinner(){
    if (box1.innerText == "O" && box2.innerText == "O" && box3.innerText == "O" || box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X") {
        cross.style.display = "block";
        cross.style.transform = "rotate(270deg)";
        cross.style.top = "100px";
        setTimeout(restart, 1000)
    }
    if (box4.innerText == "O" && box5.innerText == "O" && box6.innerText == "O" || box4.innerText == "X" && box5.innerText == "X" && box6.innerText == "X") {
        cross.style.display = "block";
        cross.style.transform = "rotate(270deg)";
        setTimeout(restart, 1000)
    }
    if (box7.innerText == "O" && box8.innerText == "O" && box9.innerText == "O" || box7.innerText == "X" && box8.innerText == "X" && box9.innerText == "X") {
        cross.style.display = "block";
        cross.style.transform = "rotate(270deg)";
        cross.style.top = "295px";
        setTimeout(restart, 1000)
    }
    if (box1.innerText == "O" && box4.innerText == "O" && box7.innerText == "O" || box1.innerText == "X" && box4.innerText == "X" && box7.innerText == "X") {
        cross.style.display = "block";
        cross.style.transform = "rotate(180deg)";
        cross.style.left = "247px";
        setTimeout(restart, 1000)
    }
    if (box2.innerText == "O" && box5.innerText == "O" && box8.innerText == "O" || box2.innerText == "X" && box5.innerText == "X" && box8.innerText == "X") {
        cross.style.display = "block";
        cross.style.transform = "rotate(180deg)";
        setTimeout(restart, 1000)
    }
    if (box3.innerText == "O" && box6.innerText == "O" && box9.innerText == "O" || box3.innerText == "X" && box6.innerText == "X" && box9.innerText == "X") {
        cross.style.display = "block";
        cross.style.transform = "rotate(180deg)";
        cross.style.left = "407px";
        setTimeout(restart, 1000)
    }
    if (box1.innerText == "O" && box5.innerText == "O" && box9.innerText == "O" || box1.innerText == "X" && box5.innerText == "X" && box9.innerText == "X") {
        cross.style.display = "block";
        setTimeout(restart, 1000)
    }
    if (box3.innerText == "O" && box5.innerText == "O" && box7.innerText == "O" || box3.innerText == "X" && box5.innerText == "X" && box7.innerText == "X") {
        cross.style.display = "block";
        cross.style.transform = "rotate(45deg)";
        setTimeout(restart, 1000)
    }
    
}
    
var restart = ()=> {
    for (let index = 0; index < boxes.length; index++) {
        window.location.reload()
    }
}

restartBtn.addEventListener("click", ()=>{
    restart()
})