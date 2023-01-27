function changebackground(){
    const changeColor = Math.floor(Math.random()*16777215).toString(16);//tostring function generates us a hexadecimal value:
document.getElementById("background").style.background = "#"+ changeColor;
console.log(changeColor);
}

