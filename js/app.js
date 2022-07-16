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
    newDiv.setAttribute("class","myDiv")
    newDiv.style.position = "absolute"
    newDiv.style.width = "750px"
    newDiv.style.height = "750px"
    newDiv.style.marginRight = "10px"
    newDiv.style.marginLeft = "10px"
    newDiv.style.right = "30%"
    newDiv.style.backgroundImage = "url(images/goBoard.png)"
    newDiv.style.backgroundSize = "contain"

    //functions for media query
    const mediaWidthFoo = (mediaWidth) => {
        if (mediaWidth.matches) {
            newDiv.style.width = "350px"
            newDiv.style.height = "350px"
            newDiv.style.marginTop = "150px"
        } else {
            newDiv.style.width = "750px"
            newDiv.style.height = "750px"
            newDiv.style.top = "100px"
            newDiv.style.marginTop = "0px"
        }
    }

    const mediaHeightFoo = (mediaWidth) => {
        if (mediaHeight.matches) {
            newDiv.style.width = "350px"
            newDiv.style.height = "350px"
            newDiv.style.top = "0px"
        } else {
            newDiv.style.width = "750px"
            newDiv.style.height = "750px"
            newDiv.style.top = "100px"
        }
    }
    var mediaWidth = window.matchMedia("(max-width: 1100px)")
    var mediaHeight = window.matchMedia("(max-height: 870px)")
    mediaWidthFoo(mediaWidth)
    mediaHeightFoo(mediaHeight)
    mediaWidth.addListener(mediaWidthFoo)
    mediaHeight.addListener(mediaHeightFoo)

let spacer = 5.2

    //Make buttons on each liberty on the board and assign it an id to keep track of
    for (let i = 0; i < 19; i++) {
        for (let j = 0; j< 19; j++) {
            var newButton = document.createElement("button")
            newButton.type = "button"
            newButton.setAttribute("class","pieceButton")
            newButton.setAttribute("id",`i${i}j${j}`)
            document.getElementById("myDiv").appendChild(newButton);
            newButton.style.position = "absolute"
            newButton.style.right = `${2 + spacer*i}%`
            newButton.style.top = `${2 + spacer*j}%`
            newButton.style.backgroundImage = 'none'
            newButton.style.background = 'none'
            newButton.style.border = 'none'
            newButton.setAttribute("onmouseover","hoverThis(this)")
            newButton.setAttribute("onmouseout","dontHoverThis(this)")
            newButton.addEventListener("click",function() {game.place();})
        }
    }
}

function hoverThis(obj) {
    console.log(document.getElementById(obj.id))
    document.getElementById(obj.id).style.backgroundColor = "#A0A0A0"
    document.getElementById(obj.id).style.border = "2px solid black"
    document.getElementById(obj.id).style.width = "1px"
    document.getElementById(obj.id).style.height = "16px"
}

function dontHoverThis(obj) {
    document.getElementById(obj.id).style.background = 'none'
    document.getElementById(obj.id).style.border = 'none'
}

const howToLink = () => {
    
}