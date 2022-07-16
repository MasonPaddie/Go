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

            //Change width and height of go board
            document.getElementById("myDiv").style.width = "350px"
            document.getElementById("myDiv").style.height = "350px"
            document.getElementById("myDiv").style.marginTop = "150px"
            
            //change width and height of all piece button divs
            for (let i = 0; i < 19; i++) {
                for (let j = 0; j< 19; j++) {
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.width = "15px"
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.height = "15px"
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.backgroundSize = "15px 15px"
                }
            }

            //align buttons within the div and change size
            for(let i = 0; i < 361; i++) {
                document.getElementsByClassName("pieceButton")[i].style.top = "10%"
                document.getElementsByClassName("pieceButton")[i].style.left = "10%"
                document.getElementsByClassName("pieceButton")[i].style.width = "15px"
                document.getElementsByClassName("pieceButton")[i].style.height = "15px"
                document.getElementsByClassName("pieceButton")[i].style.backgroundSize = "15px 15px"
                }

        } else {

            //Set back to original values if screen goes big
            document.getElementById("myDiv").style.width = "750px"
            document.getElementById("myDiv").style.height = "750px"
            document.getElementById("myDiv").style.top = "100px"
            document.getElementById("myDiv").style.marginTop = "0px"

            for (let i = 0; i < 19; i++) {
                for (let j = 0; j< 19; j++) {
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.width = "45px"
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.height = "45px"
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.backgroundSize = "45px 45px"
                    
            }
            
            for(let i = 0; i < 361; i++) {
                document.getElementsByClassName("pieceButton")[i].style.top = "15%"
                document.getElementsByClassName("pieceButton")[i].style.left = "15%"
                document.getElementsByClassName("pieceButton")[i].style.width = "30px"
                document.getElementsByClassName("pieceButton")[i].style.height = "30px"
                document.getElementsByClassName("pieceButton")[i].style.backgroundSize = "45px 45px"
                document.getElementsByClassName("pieceButton")[i].style.borderRadius = "15px"
                }
            }
        }
    }

    const mediaHeightFoo = (mediaHeight) => {
        if (mediaHeight.matches) {

            //Change width and height of go board
            document.getElementById("myDiv").style.width = "350px"
            document.getElementById("myDiv").style.height = "350px"
            document.getElementById("myDiv").style.marginTop = "150px"
            
            //change width and height of all piece button divs
            for (let i = 0; i < 19; i++) {
                for (let j = 0; j< 19; j++) {
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.width = "15px"
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.height = "15px"
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.backgroundSize = "15px 15px"
                }
            }

            //align buttons within the div and change size
            for(let i = 0; i < 361; i++) {
                document.getElementsByClassName("pieceButton")[i].style.top = "10%"
                document.getElementsByClassName("pieceButton")[i].style.left = "10%"
                document.getElementsByClassName("pieceButton")[i].style.width = "15px"
                document.getElementsByClassName("pieceButton")[i].style.height = "15px"
                document.getElementsByClassName("pieceButton")[i].style.backgroundSize = "15px 15px"
                }

        } else {

            //Set back to original values if screen goes big
            document.getElementById("myDiv").style.width = "750px"
            document.getElementById("myDiv").style.height = "750px"
            document.getElementById("myDiv").style.top = "100px"
            document.getElementById("myDiv").style.marginTop = "0px"

            for (let i = 0; i < 19; i++) {
                for (let j = 0; j< 19; j++) {
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.width = "45px"
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.height = "45px"
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.backgroundSize = "45px 45px"
                    
            }
            
            for(let i = 0; i < 361; i++) {
                document.getElementsByClassName("pieceButton")[i].style.top = "15%"
                document.getElementsByClassName("pieceButton")[i].style.left = "15%"
                document.getElementsByClassName("pieceButton")[i].style.width = "30px"
                document.getElementsByClassName("pieceButton")[i].style.height = "30px"
                document.getElementsByClassName("pieceButton")[i].style.backgroundSize = "45px 45px"
                document.getElementsByClassName("pieceButton")[i].style.borderRadius = "15px"
                }
            }
        }
    }


    //Make buttons on each liberty on the board and assign it an id to keep track of
    //Also assign event listeners and attributes for onmouseover effect
    for (let i = 0; i < 19; i++) {
        for (let j = 0; j< 19; j++) {
            //Create div each button
            var newDiv = document.createElement("div")
            newDiv.setAttribute("id",`pieceButtonDivi${i}j${j}`)
            document.getElementById("myDiv").appendChild(newDiv);
            newDiv.style.position = "absolute"
            newDiv.style.marginLeft = "0px"
            newDiv.style.marginRight = "0px"
            newDiv.style.marginTop = "0px"
            newDiv.style.marginBottom = "0px"

            //I played around with these numbers until the buttons lined up on the board
            newDiv.style.left = `${0.65 + 5.19*i}%`
            newDiv.style.top = `${0.65 + 5.19*j}%`

            var newButton = document.createElement("button")
            newButton.type = "button"
            newButton.setAttribute("class","pieceButton")
            newButton.setAttribute("id",`i${i}j${j}`)
            document.getElementById(`pieceButtonDivi${i}j${j}`).appendChild(newButton);
            newButton.style.position = "absolute"
            
            newButton.style.width = "25px"
            newButton.style.height = "25px"
            newButton.style.backgroundPosition = "center center"
            newButton.style.backgroundImage = 'none'
            newButton.style.background = 'none'
            newButton.style.border = 'none'
            newButton.style.marginLeft = "0px"
            newButton.style.marginRight = "0px"
            newButton.style.marginTop = "0px"
            newButton.style.marginBottom = "0px"
            newButton.style.textAlign = "center"
            newButton.style.verticalAlign = "center"
            newButton.setAttribute("onmouseover","hoverThis(this)")
            newButton.setAttribute("onmouseout","dontHoverThis(this)")
            newButton.setAttribute("onclick","game.place(this)")
        }
    }

    var mediaWidth = window.matchMedia("(max-width: 1100px)")
    var mediaHeight = window.matchMedia("(max-height: 870px)")
    mediaWidthFoo(mediaWidth)
    mediaHeightFoo(mediaHeight)
    mediaWidth.addListener(mediaWidthFoo)
    mediaHeight.addListener(mediaHeightFoo)

} //End of the startGame function

//functions used in the startGame function 
//when mouse enters button
function hoverThis(obj) {
    if (document.getElementById("myDiv").clientWidth === 750) {

    document.getElementById(obj.id).style.width = "15px"
    document.getElementById(obj.id).style.height = "15px"
    document.getElementById(obj.id).style.top = "25%"
    document.getElementById(obj.id).style.left = "25%"
    } else {
    document.getElementById(obj.id).style.width = "10px"
    document.getElementById(obj.id).style.height = "15px"
    document.getElementById(obj.id).style.top = "10%"
    document.getElementById(obj.id).style.left = "10%"
    }

    document.getElementById(obj.id).style.background = "#A0A0A0"
    document.getElementById(obj.id).style.border = "2px solid black"
    document.getElementById(obj.id).style.backgroundSize = "10px 10px"
    document.getElementById(obj.id).style.backgroundPosition = "center center"

}

//when mouse leaves button
function dontHoverThis(obj) {
    document.getElementById(obj.id).style.background = 'none'
    document.getElementById(obj.id).style.border = 'none'
}

//Link to the readMe
const howToLink = () => {
    
}

//game object
const game = {
    //Will keep track of what move it is
    moveCounter: 0,

    //Function to run every time a piece is placed
    place: function(obj) {

        //Add 1 to the move count
        this.moveCounter += 1

        //If it is an even numbered move, white goes. Otherwise, black goes. 
        if (this.moveCounter % 2 === 0) {
            document.getElementById(obj.id).style.backgroundImage = 'url(images/whitePiece.png)'
        } else {
            document.getElementById(obj.id).style.backgroundImage = 'url(images/blackPiece.png)'
        }

        if (document.getElementById("myDiv").clientWidth === 750) {

            //Styling applied to every button clicked if the board is 750 pixels across
            document.getElementById(obj.id).style.backgroundSize = "45px 45px"
            document.getElementById(obj.id).style.borderRadius = "15px"
            document.getElementById(obj.id).style.width = "30px"
            document.getElementById(obj.id).style.height = "30px"
            document.getElementById(obj.id).style.backgroundPosition = "center center"
            document.getElementById(obj.id).style.top = "10%"
            document.getElementById(obj.id).style.left = "10%"
        } else {

            //Styling applied if go board is not 750 pixels across
            document.getElementById(obj.id).style.backgroundSize = "15px 15px"
            document.getElementById(obj.id).style.borderRadius = "7px"
            document.getElementById(obj.id).style.width = "15px"
            document.getElementById(obj.id).style.height = "15px"
        }

        //Styling applied to every button no matter size
        document.getElementById(obj.id).style.backgroundPosition = "center center"
        document.getElementById(obj.id).style.border = "1px solid black"
        
        //Remove attributes so that the buttons stays on screen and becomes inactive
        document.getElementById(obj.id).setAttribute("onmouseout","");
        document.getElementById(obj.id).setAttribute("onmouseover","");
        document.getElementById(obj.id).setAttribute("onclick","");
        console.log(this.moveCounter)
        console.log(document.getElementById("myDiv").clientWidth)
    }

}
