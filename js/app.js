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
    newDiv.style.width = "350px"
    newDiv.style.height = "350px"
    newDiv.style.marginRight = "10px"
    newDiv.style.marginLeft = "10px"
    newDiv.style.right = "35%"
    newDiv.style.backgroundImage = "url(images/goBoard.png)"
    newDiv.style.backgroundSize = "contain"

    //Set board size based on current screen size
    console.log(window.innerWidth > 1170) 
    if (window.innerWidth > 1170) {
        if (window.innerHeight > 870) {
            // newDiv.style.width = "750px"
            // newDiv.style.height = "750px"
        } 
    } else {
            newDiv.style.width = "350px"
            newDiv.style.height = "350px"
        }

    

    //functions for media query
    const mediaWidthFoo = (mediaWidth) => {
        if (mediaWidth.matches) {

            //Change width and height of go board
            document.getElementById("myDiv").style.width = "350px"
            document.getElementById("myDiv").style.height = "350px"
            document.getElementById("myDiv").style.marginTop = "150px"
            document.getElementById("myDiv").style.right = "25%"
            
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
            document.getElementById("myDiv").style.right = "35%"

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
                    document.getElementById(`pieceButtonDivi${i}j${j}`).style.height = "20px"
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
            newDiv.style.left = `${0.55 + 5.2*i}%`
            newDiv.style.top = `${0.55 + 5.2*j}%`

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

    var mediaWidth = window.matchMedia("(max-width: 1170px)")
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
    document.getElementById(obj.id).style.top = "27%"
    document.getElementById(obj.id).style.left = "27%"
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

    //Saves the postion of the active moves. Jagged array of coordinates
    activeMoves: [],

    //Saves the position of every move that occurs in order. Jagged array of coordinates
    savedMoves: [],

    //Saves the enemy grouped pieces for every move. Resets every time pieces is placed. Jagged array of coordinates
    group: [],

    //Function to run every time a piece is placed
    place: function(obj) {

        //Reset the group
        this.group = [];

        //Change the last button pressed to a black border
        if (this.moveCounter > 0) {
        document.getElementById(buttonId).style.border = "1px solid black"
        }

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
            document.getElementById(obj.id).style.top = "13%"
            document.getElementById(obj.id).style.left = "13%"
        } else {

            //Styling applied if go board is not 750 pixels across
            document.getElementById(obj.id).style.backgroundSize = "15px 15px"
            document.getElementById(obj.id).style.borderRadius = "7px"
            document.getElementById(obj.id).style.width = "15px"
            document.getElementById(obj.id).style.height = "15px"
        }

        //Styling applied to every button no matter size
        document.getElementById(obj.id).style.backgroundPosition = "center center"
        document.getElementById(obj.id).style.border = "4px solid green"
        
        //Remove attributes so that the buttons stays on screen and becomes inactive
        document.getElementById(obj.id).setAttribute("onmouseout","");
        document.getElementById(obj.id).setAttribute("onmouseover","");
        document.getElementById(obj.id).setAttribute("onclick","");
        
        //Get the i and j coordinates of the clicked button by using the location of the parent div
        iPos = Math.round((parseFloat(((document.getElementById(document.getElementById(obj.id).parentElement.id).style.left)))-0.55)/5.2)
        jPos = Math.round((parseFloat(((document.getElementById(document.getElementById(obj.id).parentElement.id).style.top)))-0.55)/5.2)
        
        this.activeMoves.push([iPos,jPos])
        this.savedMoves.push([iPos,jPos])

        //function that checks for capture
        this.checkCapture(iPos,jPos,this.moveCounter)

        //Save the id of the clicked button so that the green border can be changed to black
        buttonId = obj.id;
        return buttonId
    },

    //function to get the color of a piece at a specific position
    checkColor: function(posI,posJ) {
        for (let i = 0; i < this.savedMoves.length; i++) {
            if (this.savedMoves[i].includes(posI)) {
                if (this.savedMoves[i].includes(posJ)) {
                    const moveCount = i + 1;
                    const color = (moveCount % 2 === 0);
                    return color
                }
            }
        }
    },

    //function to group together pieces moving up from a position 
    groupUp: function (posI,posJ) {

        //index values used for index
        let i = 0

        //get current color and the color of the next piece up
        let thisColorUp = this.checkColor(posI,posJ)
        let nextColorUp = this.checkColor(posI,posJ - i)

        //Move up while the colors are the same
        while (nextColorUp === thisColorUp) {
        
            //Determines if value exists in jagged array
            let includes = false; 
            for (let j = 0; j < this.group.length; j++) {
                if (this.group[j].includes(posI)) {
                    if (this.group[j].includes(posJ - i)) {
                        includes = true;
                    }
                }
            }
            
            //push the current piece to the group array as long as it is not already in it
            if (includes === false) {
            this.group.push([posI,posJ + i])
        
            //Checks if the piece to the left is the same color
            if (this.checkColor(posI - 1, posJ - i) === thisColorUp) {

                //if it is the same color, start grouping left on this piece
                this.groupLeft(posI - 1, posJ - i)
            }

            //Checks if the piece right is the same color
            if (this.checkColor(posI + 1, posJ - i) === thisColorUp) {

                //if it is the same color, start grouping right on this piece
                this.groupRight(posI + 1, posJ - i)
            }
        }
            //Add 1 to index value
            i += 1

            //Get the color of the next piece up
            nextColorUp = this.checkColor(posI,posJ - i)
        }
    },
    //function to group together pieces moving down from a position 
    groupDown: function (posI,posJ) {

        //index values used for index
        let i = 0

        //get current color and the color of the next piece up
        let thisColorDown = this.checkColor(posI,posJ)
        let nextColorDown = this.checkColor(posI,posJ + i)

        //Move down while the colors are the same
        while (nextColorDown === thisColorDown) {
        
            //Determines if value exists in jagged array
            let includes = false; 
            for (let j = 0; j < this.group.length; j++) {
                if (this.group[j].includes(posI)) {
                    if (this.group[j].includes(posJ + i)) {
                        includes = true;
                    }
                }
            }
            
           //push the current piece to the group array as long as it is not already in it
           if (includes === false) {
            this.group.push([posI,posJ + i])
        
            //Checks if the piece to the left is the same color
            if (this.checkColor(posI - 1, posJ + i) === thisColorDown) {

                //if it is the same color, start grouping left on this piece
                this.groupLeft(posI - 1, posJ + i)
            }

            //Checks if the piece right is the same color
            if (this.checkColor(posI + 1, posJ + i) === thisColorDown) {

                //if it is the same color, start grouping right on this piece
                this.groupRight(posI + 1, posJ + i)
            }
        }

            //Add 1 to index value
            i += 1

            //Get the color of the next piece down
            nextColorDown = this.checkColor(posI,posJ + i)
        }
    },

    //function to group together pieces moving left from a position 
    groupLeft: function (posI,posJ) {

        //index values used for index
        let i = 0

        //get current color and the color of the next piece up
        let thisColorLeft = this.checkColor(posI,posJ)
        let nextColorLeft = this.checkColor(posI - i,posJ)

        //Move left while the colors are the same
        while (nextColorLeft === thisColorLeft) {
        
            //Determines if value exists in jagged array
            let includes = false; 
            for (let j = 0; j < this.group.length; j++) {
                if (this.group[j].includes(posI - i)) {
                    if (this.group[j].includes(posJ)) {
                        includes = true;
                    }
                }
            }
            
            //push the current piece to the group array as long as it is not already in it
            if (includes === false) {
                this.group.push([posI - i,posJ])
            
                //Checks if the piece up is the same color
                if (this.checkColor(posI - i, posJ - 1) === thisColorLeft) {

                    //if it is the same color, start grouping up on this piece
                    this.groupUp(posI - i, posJ - 1)
                }

                //Checks if the piece down is the same color
                if (this.checkColor(posI - i, posJ + 1) === thisColorLeft) {

                    //if it is the same color, start grouping down on this piece
                    this.groupDown(posI - i, posJ + 1)
                }
            }

            //Add 1 to index value
            i += 1

            //Get the color of the next piece left
            nextColorLeft = this.checkColor(posI - i,posJ)
        }
    },

    //function to group together pieces moving right from a position 
    groupRight: function (posI,posJ) {

        //index values used for index
        let i = 0

        //get current color and the color of the next piece up
        let thisColorRight = this.checkColor(posI,posJ)
        let nextColorRight = this.checkColor(posI + i,posJ)

        //Move Right while the colors are the same
        while (nextColorRight === thisColorRight) {
        
            //Determines if value exists in jagged array
            let includes = false; 
            for (let j = 0; j < this.group.length; j++) {
                if (this.group[j].includes(posI + i)) {
                    if (this.group[j].includes(posJ)) {
                        includes = true;
                    }
                }
            }
            
            //push the current piece to the group array as long as it is not already in it
            if (includes === false) {
                this.group.push([posI + i,posJ])
            

                //Checks if the piece up is the same color
                if (this.checkColor(posI + i, posJ - 1) === thisColorRight) {

                    //if it is the same color, start grouping up on this piece
                    this.groupUp(posI + i, posJ - 1)
                }

                //Checks if the piece down is the same color
                if (this.checkColor(posI + i, posJ + 1) === thisColorRight) {

                    //if it is the same color, start grouping down on this piece
                    this.groupDown(posI + i, posJ + 1)
                }
            }

            //Add 1 to index value
            i += 1

            //Get the color of the next piece Right
            nextColorRight = this.checkColor(posI + i,posJ)
        }
    },

    //function that checks adjacent pieces for capture on every place
    checkCapture: function(posI,posJ,moveCount) {
        
       //first checks all adjacent pieces to see if any are opposite color. 
       //if any adjacent pieces are the opposite color, push this position to group array as well as any adjacent pieces of same color
       //checks color using moveCounter

       //The color of the recently played piece
       currentColor = (moveCount % 2 === 0);

       //Only check adjacent pieces up if there is space to move up
        if (posJ != 0) {
            
            //Array for the location of the adjacent piece in the up direction
            adjacentUp = [posI, posJ - 1]
            
            //Loop across the jagged array of active moves and see if the adjacent piece has been played
            for (let i = 0; i < this.activeMoves.length; i++) {
                if (this.activeMoves[i].includes(adjacentUp[0])) {
                    if (this.activeMoves[i].includes(adjacentUp[1])) {

                        //If the piece has been played, check the color of this piece and start grouping if it is opposite the played piece. 
                        color = this.checkColor(adjacentUp[0],adjacentUp[1])
                        if (color != currentColor) {
                           this.groupUp(adjacentUp[0],adjacentUp[1])
                        }
                    }
                } 
            }
        } 

        //Only check adjacent pieces down if there is space to move down
        if (posJ != 18) {
            
            //Array for the location of the adjacent piece in the down direction
            adjacentDown = [posI, posJ + 1]
            
            //Loop across the jagged array of active moves and see if the adjacent piece has been played
            for (let i = 0; i < this.activeMoves.length; i++) {
                if (this.activeMoves[i].includes(adjacentDown[0])) {
                    if (this.activeMoves[i].includes(adjacentDown[1])) {

                        //If the piece has been played, check the color of this piece and start group if it is opposite the played piece. 
                        color = this.checkColor(adjacentDown[0],adjacentDown[1])
                        if (color != currentColor) {
                           this.groupDown(adjacentDown[0],adjacentDown[1])
                        }
                    }
                } 
            }
        } 
        
        //Only check adjacent pieces left if there is space to move left
        if (posI != 0) {
            
            //Array for the location of the adjacent piece in the left direction
            adjacentLeft = [posI - 1, posJ]
            
            //Loop across the jagged array of active moves and see if the adjacent piece has been played
            for (let i = 0; i < this.activeMoves.length; i++) {
                if (this.activeMoves[i].includes(adjacentLeft[0])) {
                    if (this.activeMoves[i].includes(adjacentLeft[1])) {

                        //If the piece has been played, check the color of this piece and start group if it is opposite the played piece. 
                        color = this.checkColor(adjacentLeft[0],adjacentLeft[1])
                        if (color != currentColor) {
                           this.groupLeft(adjacentLeft[0],adjacentLeft[1])
                        }
                    }
                } 
            }
        } 

          //Only check adjacent pieces right if there is space to move right
          if (posI != 18) {
            
            //Array for the location of the adjacent piece in the right direction
            adjacentRight = [posI + 1, posJ]
            
            //Loop across the jagged array of active moves and see if the adjacent piece has been played
            for (let i = 0; i < this.activeMoves.length; i++) {
                if (this.activeMoves[i].includes(adjacentRight[0])) {
                    if (this.activeMoves[i].includes(adjacentRight[1])) {

                        //If the piece has been played, check the color of this piece and start group if it is opposite the played piece. 
                        color = this.checkColor(adjacentRight[0],adjacentRight[1])
                        if (color != currentColor) {
                           this.groupRight(adjacentRight[0],adjacentRight[1])
                        }
                    }
                } 
            }
        } 
        console.log(this.group)
    } //End of checkCapture function

}// End of game object
