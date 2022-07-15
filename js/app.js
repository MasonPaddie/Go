//Function that runs when the start game button is pressed
const startGame = () => {
    //Remove stuff on screen and align body element 
    document.getElementsByClassName('welcomeButton')[0].style.display = 'none'
    document.getElementsByClassName('startButton')[0].style.display = 'none'
    document.getElementsByClassName('howToButton')[0].style.display = 'none'
    document.body.style.backgroundImage = 'none'
    document.body.style.position ="relative"
    document.body.style.backgroundSize = "contain"
    document.body.style.textAlign = "center"

    //Make div for the board to be inserted on and append to body
    var newDiv = document.createElement("div")
    document.body.appendChild(newDiv)
    newDiv.setAttribute("id","myDiv")
    newDiv.style.position = "absolute"
    newDiv.style.width = "750px"
    newDiv.style.height = "750px"
    newDiv.style.marginRight = "10px"
    newDiv.style.marginLeft = "10px"
    newDiv.style.right = "25%"
    newDiv.style.backgroundImage = "url(images/goBoard.png)"
    newDiv.style.backgroundSize = "contain"

    for (let i = 0; i < 19; i++) {
        for (let j = 0; j< 19; j++) {
            var newButton = document.createElement("button")
            newButton.type = "button"
            newButton.setAttribute("id","pieceButton")
            document.getElementById("myDiv").appendChild(newButton);
            newButton.style.position = "absolute"
            newButton.style.width = "1px"
            newButton.style.height = "16px"
            newButton.style.right = `${2.2 + 5.2*i}%`
            newButton.style.top = `${2.2 + 5.2*j}% `
            newButton.style.backgroundColor = "#A0A0A0"
            newButton.style.backgroundImage = 'none'
            newButton.style.border = "2px solid black"
            newButton.addEventListener("click",function() {game.place();})
        }
    }
}

const howToLink = () => {
    
}