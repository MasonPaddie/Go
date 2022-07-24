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

    //insert piece holder images
    var img = document.createElement("img")
    img.setAttribute("id","pieceHolderPic2")
    img.src = "images/pieceHolder.png"
    document.body.appendChild(img)
    img.style.position = "absolute"
    img.style.width = "350px"
    img.style.height = "350px"
    img.style.left = "2%"

    //insert piece holder images
    var img = document.createElement("img")
    img.setAttribute("id","pieceHolderPic1")
    img.src = "images/pieceHolder.png"
    document.body.appendChild(img)
    img.style.position = "absolute"
    img.style.width = "350px"
    img.style.height = "350px"
    img.style.left = "2%"
    img.style.top = "800%"

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
 
    if (window.innerWidth < 1170 || window.innerHeight < 870) {
        newDiv.style.width = "350px"
        newDiv.style.height = "350px"
    }
    
    //Make the call game button in the top right corner 
    var callGameButton = document.createElement("button")
    callGameButton.type = "button"
    callGameButton.setAttribute("id","callGameButton")
    document.body.appendChild(callGameButton)
    callGameButton.style.position = "absolute"
    callGameButton.style.top = "200%"
    callGameButton.style.right = "5%"
    callGameButton.style.width = "350px"
    callGameButton.style.height = "90px"
    callGameButton.style.backgroundRepeat = "no-repeat"
    callGameButton.style.backgroundPosition = "left"
    callGameButton.innerHTML = "Call Game"
    callGameButton.style.fontSize = "55px"
    callGameButton.style.textAlign = "right"
    callGameButton.setAttribute("onclick","game.callGame()")
    
    //Make the call exit button in the bottom right corner 
    var moveCountButton = document.createElement("button")
    moveCountButton.type = "button"
    moveCountButton.setAttribute("id","moveCountButton")
    document.body.appendChild(moveCountButton)
    moveCountButton.style.position = "absolute"
    moveCountButton.style.top = "500%"
    moveCountButton.style.right = "5%"
    moveCountButton.style.width = "350px"
    moveCountButton.style.height = "90px"
    moveCountButton.style.backgroundRepeat = "no-repeat"
    moveCountButton.style.backgroundPosition = "left"
    moveCountButton.innerHTML = "Move Count"
    moveCountButton.style.fontSize = "49px"
    moveCountButton.style.textAlign = "right"
    moveCountButton.setAttribute("onclick","game.displayMoveCount(game.displayStatus)")

    //Make the call exit button in the bottom right corner 
    var exitGameButton = document.createElement("button")
    exitGameButton.type = "button"
    exitGameButton.setAttribute("id","exitGameButton")
    document.body.appendChild(exitGameButton)
    exitGameButton.style.position = "absolute"
    exitGameButton.style.top = "1400%"
    exitGameButton.style.right = "5%"
    exitGameButton.style.width = "350px"
    exitGameButton.style.height = "90px"
    exitGameButton.style.backgroundRepeat = "no-repeat"
    exitGameButton.style.backgroundPosition = "left"
    exitGameButton.innerHTML = "Exit Game"
    exitGameButton.style.fontSize = "55px"
    exitGameButton.style.textAlign = "right"
    exitGameButton.setAttribute("onclick","game.exitGame()")

    //Make the call exit button in the bottom right corner 
    var howToInGameButton = document.createElement("button")
    howToInGameButton.type = "button"
    howToInGameButton.setAttribute("id","howToInGameButton")
    document.body.appendChild(howToInGameButton)
    howToInGameButton.style.position = "absolute"
    howToInGameButton.style.top = "800%"
    howToInGameButton.style.right = "5%"
    howToInGameButton.style.width = "350px"
    howToInGameButton.style.height = "90px"
    howToInGameButton.style.backgroundRepeat = "no-repeat"
    howToInGameButton.style.backgroundPosition = "left"
    howToInGameButton.innerHTML = "How to Play"
    howToInGameButton.style.fontSize = "49px"
    howToInGameButton.style.textAlign = "right"
    howToInGameButton.setAttribute("onclick","howToLink()")

    //functions for media query
    const mediaWidthFoo = (mediaWidth) => {
        if (mediaWidth.matches) {

            //Change width and height of go board
            document.getElementById("myDiv").style.width = "350px"
            document.getElementById("myDiv").style.height = "350px"
            document.getElementById("myDiv").style.marginTop = "150px"
            document.getElementById("myDiv").style.right = "30%"
            
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

            //change the style of callGame button
            document.getElementById("callGameButton").style.width = "100px"
            document.getElementById("callGameButton").style.fontSize = "25px"
            document.getElementById("callGameButton").style.textAlign = "center"
            document.getElementById("callGameButton").style.top = "400%"

            //change the style of exitGame button
            document.getElementById("exitGameButton").style.width = "100px"
            document.getElementById("exitGameButton").style.fontSize = "25px"
            document.getElementById("exitGameButton").style.textAlign = "center"
            document.getElementById("exitGameButton").style.top = "1000%"

            //change the style of moveCount button
            document.getElementById("moveCountButton").style.width = "100px"
            document.getElementById("moveCountButton").style.fontSize = "25px"
            document.getElementById("moveCountButton").style.textAlign = "center"
            document.getElementById("moveCountButton").style.top = "600%"

            //change the style of howToInGame button
            document.getElementById("howToInGameButton").style.width = "100px"
            document.getElementById("howToInGameButton").style.fontSize = "25px"
            document.getElementById("howToInGameButton").style.textAlign = "center"
            document.getElementById("howToInGameButton").style.top = "800%"

            //Change the size of the piece holder pictures
            document.getElementById("pieceHolderPic1").style.width = "150px"
            document.getElementById("pieceHolderPic1").style.height = "150px"
            document.getElementById("pieceHolderPic2").style.width = "150px"
            document.getElementById("pieceHolderPic2").style.height = "150px"

        } else {

            if (mediaHeight.matches === false) {
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
                }
                
                for(let i = 0; i < 361; i++) {
                    document.getElementsByClassName("pieceButton")[i].style.top = "15%"
                    document.getElementsByClassName("pieceButton")[i].style.left = "15%"
                    document.getElementsByClassName("pieceButton")[i].style.width = "30px"
                    document.getElementsByClassName("pieceButton")[i].style.height = "30px"
                    document.getElementsByClassName("pieceButton")[i].style.backgroundSize = "45px 45px"
                    document.getElementsByClassName("pieceButton")[i].style.borderRadius = "15px"
                }

                //change the style of callGame button
                document.getElementById("callGameButton").style.width = "350px"
                document.getElementById("callGameButton").style.fontSize = "55px"
                document.getElementById("callGameButton").style.textAlign = "right"
                document.getElementById("callGameButton").style.top = "200%"

                //change the style of exitGame button
                document.getElementById("exitGameButton").style.width = "350px"
                document.getElementById("exitGameButton").style.fontSize = "55px"
                document.getElementById("exitGameButton").style.textAlign = "right"
                document.getElementById("exitGameButton").style.top = "1400%"

                //change the style of moveCount button
                document.getElementById("moveCountButton").style.width = "350px"
                document.getElementById("moveCountButton").style.fontSize = "49px"
                document.getElementById("moveCountButton").style.textAlign = "right"
                document.getElementById("moveCountButton").style.top = "500%"
                
                //change the style of howToInGame button
                document.getElementById("howToInGameButton").style.width = "350px"
                document.getElementById("howToInGameButton").style.fontSize = "49px"
                document.getElementById("howToInGameButton").style.textAlign = "right"
                document.getElementById("howToInGameButton").style.top = "800%"

                //Change the size of the piece holder pictures
                document.getElementById("pieceHolderPic1").style.width = "350px"
                document.getElementById("pieceHolderPic1").style.height = "350px"
                document.getElementById("pieceHolderPic2").style.width = "350px"
                document.getElementById("pieceHolderPic2").style.height = "350px"
            }
        }
    }

    const mediaHeightFoo = (mediaHeight) => {
        if (mediaHeight.matches) {

            //Change width and height of go board
            document.getElementById("myDiv").style.width = "350px"
            document.getElementById("myDiv").style.height = "350px"
            document.getElementById("myDiv").style.marginTop = "150px"
            document.getElementById("myDiv").style.right = "30%"
            
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

            //change the style of callGame button
            document.getElementById("callGameButton").style.width = "100px"
            document.getElementById("callGameButton").style.fontSize = "25px"
            document.getElementById("callGameButton").style.textAlign = "center"
            document.getElementById("callGameButton").style.top = "400%"

            //change the style of exitGame button
            document.getElementById("exitGameButton").style.width = "100px"
            document.getElementById("exitGameButton").style.fontSize = "25px"
            document.getElementById("exitGameButton").style.textAlign = "center"
            document.getElementById("exitGameButton").style.top = "1000%"

            //change the style of moveCount button
            document.getElementById("moveCountButton").style.width = "100px"
            document.getElementById("moveCountButton").style.fontSize = "25px"
            document.getElementById("moveCountButton").style.textAlign = "center"
            document.getElementById("moveCountButton").style.top = "600%"


            //change the style of howToInGame button
            document.getElementById("howToInGameButton").style.width = "100px"
            document.getElementById("howToInGameButton").style.fontSize = "25px"
            document.getElementById("howToInGameButton").style.textAlign = "center"
            document.getElementById("howToInGameButton").style.top = "800%"

            //Change the size of the piece holder pictures
            document.getElementById("pieceHolderPic1").style.width = "150px"
            document.getElementById("pieceHolderPic1").style.height = "150px"
            document.getElementById("pieceHolderPic2").style.width = "150px"
            document.getElementById("pieceHolderPic2").style.height = "150px"

        } else {

            if(mediaWidth.matches === false) {
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
                }
                
                for(let i = 0; i < 361; i++) {
                    document.getElementsByClassName("pieceButton")[i].style.top = "15%"
                    document.getElementsByClassName("pieceButton")[i].style.left = "15%"
                    document.getElementsByClassName("pieceButton")[i].style.width = "30px"
                    document.getElementsByClassName("pieceButton")[i].style.height = "30px"
                    document.getElementsByClassName("pieceButton")[i].style.backgroundSize = "45px 45px"
                    document.getElementsByClassName("pieceButton")[i].style.borderRadius = "15px"
                }
                

                //change the style of callGame button
                document.getElementById("callGameButton").style.width = "350px"
                document.getElementById("callGameButton").style.fontSize = "55px"
                document.getElementById("callGameButton").style.textAlign = "right"
                document.getElementById("callGameButton").style.top = "200%"

                //change the style of exitGame button
                document.getElementById("exitGameButton").style.width = "350px"
                document.getElementById("exitGameButton").style.fontSize = "55px"
                document.getElementById("exitGameButton").style.textAlign = "right"
                document.getElementById("exitGameButton").style.top = "1400%"

                //change the style of moveCount button
                document.getElementById("moveCountButton").style.width = "350px"
                document.getElementById("moveCountButton").style.fontSize = "49px"
                document.getElementById("moveCountButton").style.textAlign = "right"
                document.getElementById("moveCountButton").style.top = "500%"

                //change the style of howToInGame button
                document.getElementById("howToInGameButton").style.width = "350px"
                document.getElementById("howToInGameButton").style.fontSize = "49px"
                document.getElementById("howToInGameButton").style.textAlign = "right"
                document.getElementById("howToInGameButton").style.top = "800%"

                //Change the size of the piece holder pictures
                document.getElementById("pieceHolderPic1").style.width = "350px"
                document.getElementById("pieceHolderPic1").style.height = "350px"
                document.getElementById("pieceHolderPic2").style.width = "350px"
                document.getElementById("pieceHolderPic2").style.height = "350px"
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

    //Call the makeCoors function to make the liberties on the board
    game.makeCoors();

    //Using media queries in JS is something I did not really understand.
    //This link from W3 schools was the template I used to build upon for the media queries.
    //https://www.w3schools.com/howto/howto_js_media_queries.asp
    var mediaWidth = window.matchMedia("(max-width: 1170px)")
    var mediaHeight = window.matchMedia("(max-height: 870px)")
    mediaWidthFoo(mediaWidth)
    mediaHeightFoo(mediaHeight)
    mediaWidth.addListener(mediaWidthFoo)
    mediaHeight.addListener(mediaHeightFoo)


} 

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
    window.open('https://github.com/MasonPaddie/Go')
}

//game object
const game = {

    //Keeps track of what move it is
    moveCounter: 0,

    //Saves the postion of the active moves. Multi-dimensional array of coordinates
    activeMoves: [],

    //Saves the active moves after every move. Used for study game. Jagged array of coordinates
    activeSavedMoves: [],

    //Saves the position of every move that occurs in order. Multi-dimensional array of coordinates
    savedMoves: [],

    //Saves the active moves after every move. Used for study game. Jagged array of coordinates
    savedSavedMoves: [],

    //Saves the enemy grouped pieces. Multi-dimensional array of coordinates
    group: [],
    
    //Keeps track of the active liberties on the board. Initally, every intersection is a liberty.
    //Is empty right now but filled upon startGame. Multi-dimensional array of coordinates
    liberties: [],

    //Keeps track of how many pieces black has captured
    blackCaptured: 0,

    //Keeps track of how many pieces white has captured
    //Since black goes first, white gets a 0.5 point advantage. This prevents a tie from ever happening since there are only integer points.
    whiteCaptured: 0.5,

    //Used to compute how many liberties black has after every move
    blackLibs: 0,

    //Used to compute how many liberties white has after every move
    whiteLibs: 0,

    //function to make the coordinate array. Called once on startGame.
    makeCoors: function() {
        for (let i = 0;i < 19; i++) {
            for (let j = 0;j < 19; j++) {
                this.liberties.push([i,j])
            }
        }
    },

    //Function to run every time a piece is placed
    place: function(obj) {

        //Reset the group
        this.group = [];

        //Add 1 to the move count
        this.moveCounter += 1

        //Get the i and j coordinates of the clicked button by using the location of the parent div
        let iPos = Math.round((parseFloat(((document.getElementById(document.getElementById(obj.id).parentElement.id).style.left)))-0.55)/5.2)
        let jPos = Math.round((parseFloat(((document.getElementById(document.getElementById(obj.id).parentElement.id).style.top)))-0.55)/5.2)

        //Change the last button pressed to a black border
        if (this.moveCounter > 1) {
            if (this.multDimIncludes(lastButtonInfo[0],lastButtonInfo[1],this.activeMoves))
        document.getElementById(lastButtonInfo[2]).style.border = "1px solid black"
        }

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

        //Push these moves to activeMoves and savedMoves
        this.activeMoves.push([iPos,jPos])
        this.savedMoves.push([iPos,jPos])

        //Push all of active moves to activeSaved moves to form jagged array
        let tempArr = []
        for (let i = 0; i < this.activeMoves.length; i++) {
            tempArr.push(this.activeMoves[i])
        }
        this.activeSavedMoves.push(tempArr)

        //Push all of saved moves to savedSaved moves to form jagged array
        let tempArr2 = []
        for (let i = 0; i < this.savedMoves.length; i++) {
            tempArr2.push(this.savedMoves[i])
        }
        this.savedSavedMoves.push(tempArr2)

        //function that removes this position from liberties array
        this.multDimRemove(iPos,jPos,this.liberties)

        //function that checks for capture
        let capturedOne = this.checkCapture(iPos,jPos)

        //function to check for eyes every play
        this.checkEyes(iPos,jPos,capturedOne)

        //function to keep track of the liberty score for each color
        this.getLibScore()

        //display the move count if the display status is true
        if (this.displayStatus === true) {
            document.getElementById(obj.id).innerHTML = this.moveCounter
        }

        //Save the id of the clicked button so that the green border can be changed to black
        buttonId = obj.id;
        lastPosI = iPos
        lastPosJ = jPos;
        lastButtonInfo = [lastPosI,lastPosJ,buttonId]
        return lastButtonInfo
    },

    //function to test if a coordinate array is in a multidimensional coordinate array
    multDimIncludes: function(posI, posJ, multDimArr) {
        let includes = false; 
        for (let i = 0; i < multDimArr.length; i++) {
            if (multDimArr[i][0] === (posI)) {
                if (multDimArr[i][1] === (posJ)) {
                    includes = true;
                }
            }
        }
        return includes
    },

    //function to get the last index of a coordinate array in a multidimensional coordinate array
    multDimIndex: function(posI,posJ, multDimArr) {
        let index = 0;
        for (let i = 0; i < multDimArr.length; i++) {
            if (multDimArr[i][0] === (posI)) {
                if (multDimArr[i][1] === (posJ)) {
                    index = i;
                }
            }
        }
        return index
    },

    //function to remove coordinates from multidimensional coordinate array
    multDimRemove: function (posI, posJ, multDimArr) {
        if (this.multDimIncludes(posI,posJ,multDimArr)) {
            multDimArr.splice(this.multDimIndex(posI,posJ,multDimArr),1)
        }
    },

    //function to remove duplicate values from multidimensional coordinate array
    multDimRemoveDupes: function (multDimArr) {
        let tempArr = [];
        
        for (let i = 0; i < multDimArr.length; i++) {
            if (this.multDimIncludes(multDimArr[i][0],multDimArr[i][1],tempArr) === false) {
                tempArr.push([multDimArr[i][0],multDimArr[i][1]])
            }
        }

        return tempArr
    },

    //function to get the color of a piece at a specific position
    checkColor: function(posI,posJ) {
        if (this.multDimIncludes(posI,posJ,this.activeMoves)) {
           let color = this.multDimIndex(posI,posJ,this.savedMoves) % 2 != 0
           return color
        } else {
            return ""
        }
    },

    //function to check color at position during study game
    checkColorCapture: function(posI,posJ) {
        for (let i = 0; i < this.savedMoves.length; i++) {
            if (this.savedMoves[i][0] === (posI)) {
                if (this.savedMoves[i][1] === (posJ)) {
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
        
            //Determines if value exists in multidimensional coordinate array
            let includes = this.multDimIncludes(posI,posJ - i,this.group);
            //push the current piece to the group array as long as it is not already in it
            if (includes === false) {
                this.group.push([posI,posJ - i])
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
        
            //Determines if value exists in multidimensional coordinate array
            let includes = this.multDimIncludes(posI,posJ + i,this.group);
            
            //push the current piece to the group array as long as it is not already in it
            if (includes === false) {
            this.group.push([posI,posJ + i])
            }

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
        
            //Determines if value exists in multidimensional coordinate array
            let includes = this.multDimIncludes(posI - i,posJ,this.group);

            //push the current piece to the group array as long as it is not already in it
            if (includes === false) {
                this.group.push([posI - i,posJ])
            }

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
        
            //Determines if value exists in multidimensional coordinate array          
            let includes = this.multDimIncludes(posI + i,posJ,this.group);

            //push the current piece to the group array as long as it is not already in it
            if (includes === false) {
                this.group.push([posI + i,posJ])
            }

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
            

            //Add 1 to index value
            i += 1

            //Get the color of the next piece Right
            nextColorRight = this.checkColor(posI + i,posJ)
        }
    },

    //function takes a piece position as input and outputs the group that contains that piece
    getGroup: function(posI,posJ) {

        //Get the color of the current piece
        let pieceColor = this.checkColor(posI,posJ);

        //Add the current piece to the group
        this.group.push([posI,posJ]);

        //If the piece above is the same color, start grouping up
        if (pieceColor === this.checkColor(posI,posJ - 1)) {
            this.groupUp(posI,posJ - 1)
        }

        //If the piece below is the same color, start grouping down
        if (pieceColor === this.checkColor(posI,posJ + 1)) {
            this.groupDown(posI,posJ + 1)
        }

        //If the piece to the left is the same color, start grouping left
        if (pieceColor === this.checkColor(posI - 1,posJ)) {
            this.groupLeft(posI - 1,posJ)
        }
  
        //If the piece to the right is the same color, start grouping right
        if (pieceColor === this.checkColor(posI + 1,posJ)) {
            this.groupRight(posI + 1,posJ)
        }
        
    },

    //function that takes a position and outputs all the liberties of that position
    getPositionLiberties: function(posI,posJ) {
        let positionLibs = [];

        //If the position up is in the liberties array and not already in it, push this position to positionLibs
        if (this.multDimIncludes(posI,posJ - 1,this.liberties)) {
            if (this.multDimIncludes(posI,posJ - 1,positionLibs) === false) {
                positionLibs.push([posI, posJ - 1])
            }
        }

        //If the position down is in the liberties array and not already in it, push this position to positionLibs
        if (this.multDimIncludes(posI,posJ + 1,this.liberties)) {
            if (this.multDimIncludes(posI,posJ + 1, positionLibs) === false) {
                positionLibs.push([posI, posJ + 1])
            }
        }
    
        //If the position left is in the liberties array and not already in it, push this position to positionLibs
        if (this.multDimIncludes(posI - 1,posJ,this.liberties)) {
            if (this.multDimIncludes(posI - 1, posJ, positionLibs) === false) {
                positionLibs.push([posI - 1, posJ])
            }
        }

        //If the position right is in the liberties array and not already in it, push this position to positionLibs
        if (this.multDimIncludes(posI + 1,posJ,this.liberties)) {
            if (this.multDimIncludes(posI + 1, posJ, positionLibs) === false)
                positionLibs.push([posI + 1, posJ])
        }

        //return positionLibs
        return positionLibs
    },

    //funtion that takes a group as input and outputs all the liberties of this group.
    //group is a multidimensional coordinate array
    getGroupLiberties: function(group) {

        //loop over the array of coordinates and getPositionLiberties on each position. 
        //push each value to libs array

        let libs = [];

        for (let i = 0; i < group.length; i++) {
            const libArr = this.getPositionLiberties(group[i][0],group[i][1])
            for (let j = 0; j < libArr.length; j++) {
                if (this.multDimIncludes(libArr[j][0],libArr[j][1],group) === false) {
                libs.push([libArr[j][0],libArr[j][1]]);   
                }
            }
        }
        return libs
    },  

    //function that checks if a position has a piece on it
    checkIfPlaced: function (posI,posJ) {
        //Loop across the multidimensional coordinate array of active moves and see if the piece has been played
        let placed = false;
        for (let i = 0; i < this.activeMoves.length; i++) {
            if (this.activeMoves[i][0] === (posI)) {
                if (this.activeMoves[i][1] === (posJ)) {
                    placed = true;
                }
            }
        }
        return placed
    },

    //function to capture a group
    capture: function(group) {

        //loop over the group array and get each coordinate array
        for (let i = 0; i < group.length; i++) {

            //singular coordinate array
            let pieceLocation = group[i]

            //button element containing that coordinate
            let piece = document.getElementById(`i${pieceLocation[0]}j${pieceLocation[1]}`)

            //first, remove the pieces on the board visually. 
            piece.style.backgroundImage = 'none'
            piece.style.background = 'none'
            piece.style.border = 'none'
            piece.innerHTML = ""

            //then place the little grey buttons that show when hovered
            piece.style.position = "absolute"
            piece.style.width = "25px"
            piece.style.height = "25px"
            piece.style.backgroundPosition = "center center"
            piece.style.marginLeft = "0px"
            piece.style.marginRight = "0px"
            piece.style.marginTop = "0px"
            piece.style.marginBottom = "0px"
            piece.style.textAlign = "center"
            piece.style.verticalAlign = "center"
            piece.setAttribute("onmouseover","hoverThis(this)")
            piece.setAttribute("onmouseout","dontHoverThis(this)")
            piece.setAttribute("onclick","game.place(this)")

            //makes sure the button size matches the board size
            if (document.getElementById("myDiv").clientWidth === 350) {
                piece.style.top = "10%"
                piece.style.left = "10%"
                piece.style.width = "15px"
                piece.style.height = "15px"
                piece.style.backgroundSize = "15px 15px"
            }

            //now the piece needs to be removed from the game logic
            //to do this, start by removing the pieces from activeMoves
            this.multDimRemove(pieceLocation[0],pieceLocation[1],this.activeMoves)

            //then push theses positions to the liberties array
            this.liberties.push([pieceLocation[0],pieceLocation[1]])
        }

        //then add the number of caputured pieces to the score of the respective color
        if (this.checkColorCapture(group[0][0],group[0][1]) === true) {
            this.blackCaptured += (this.multDimRemoveDupes(group).length)
        } else {
            this.whiteCaptured += (this.multDimRemoveDupes(group).length)
        }
    },

    //function to keep track of the number of liberties for each color after each move
    getLibScore: function() {

        let whiteLiberties = [];
        let blackLiberties = [];

        for (let i = 0; i < this.activeMoves.length; i++) {
            let posLibs = this.getPositionLiberties(this.activeMoves[i][0],this.activeMoves[i][1])
            for (let j = 0; j < posLibs.length; j++) {
                if (this.checkColor(this.activeMoves[i][0],this.activeMoves[i][1]) === false) {
                        blackLiberties.push([posLibs[j][0],posLibs[j][1]])
                } else {
                        whiteLiberties.push([posLibs[j][0],posLibs[j][1]])
                }
            }
        }

        this.whiteLibs = this.multDimRemoveDupes(whiteLiberties).length;
        this.blackLibs = this.multDimRemoveDupes(blackLiberties).length;
    },

    //function that checks adjacent pieces for capture on every place
    checkCapture: function(posI,posJ) {

        //get the color of the current piece
        let thisColor = (this.moveCounter % 2 === 0)

        //Get the coordinates of the pieces adjacent 
        let upPos = [posI,posJ - 1];
        let downPos = [posI,posJ + 1];
        let leftPos = [posI - 1,posJ];
        let rightPos = [posI + 1,posJ];

        //get the color of all adjacent pieces
        let upColor = this.checkColor(upPos[0],upPos[1])
        let downColor = this.checkColor(downPos[0],downPos[1])
        let leftColor = this.checkColor(leftPos[0],leftPos[1])
        let rightColor = this.checkColor(rightPos[0],rightPos[1])

        //Initialize arrays for the groups in each direction
        let upGroup = [];
        let downGroup = [];
        let leftGroup = [];
        let rightGroup = [];


        //Used for disabling the button of the captured group if the length of the group is one
        let capturedOne = false;

        //first checks if adjacent piece has been placed
        //then checks adjacent piece to see if it is opposite color 
        //if the piece is the opposite color, get the group that contains this piece
        
        if (this.checkIfPlaced(upPos[0],upPos[1]) === true) {
            if (thisColor != upColor) {
                this.getGroup(posI, posJ - 1)
                upGroup = this.group;
                this.group = [];
            }
        }

        if (this.checkIfPlaced(downPos[0],downPos[1]) === true) {
            if (thisColor != downColor) {
                this.getGroup(posI, posJ + 1)
                downGroup = this.group
                this.group = [];
            }
        }

        if (this.checkIfPlaced(leftPos[0],leftPos[1]) === true) {
            if (thisColor != leftColor) {
                this.getGroup(posI - 1, posJ)
                leftGroup = this.group
                this.group = [];
            }
        }

        if (this.checkIfPlaced(rightPos[0],rightPos[1]) === true) {
            if (thisColor != rightColor) {
                this.getGroup(posI + 1, posJ)
                rightGroup = this.group
                this.group = [];
            }
        }//Groups attained

        //first check if the group exists
        //then check if the first position of the group exists in activeMoves.
        //this needs to be done since any of upGroup, downGroup, leftGroup, and rightGroup could be the same
        if(upGroup.length > 0) {
            if (this.checkIfPlaced(upGroup[0][0],upGroup[0][1])) {

                //get the liberties of upGroup
                //if there are no liberties, capture the group
                if (this.getGroupLiberties(upGroup).length === 0) {
                    if (upColor != thisColor && (upColor === true || upColor === false)) {
                    this.capture(upGroup)
                        //Will disbale the button of the group if the caputured group is only one piece
                        if (upGroup.length === 1) {
                            capturedOne = true;
                        }
                    }
                }
            }
        }
        
        //first check if the group exists
        if(downGroup.length > 0) {
            //check if the first position exists in activeMoves.
            if (this.checkIfPlaced(downGroup[0][0],downGroup[0][1])) {

                //get the liberties of downGroup
                //if there are no liberties, capture the group
                if (this.getGroupLiberties(downGroup).length === 0) {
                    if (downColor != thisColor && (downColor === true || downColor === false)) {
                        this.capture(downGroup)
                        //Will disbale the button of the group if the caputured group is only one piece
                        if (downGroup.length === 1) {
                            capturedOne = true;
                        }
                    }
                }
            }
        }

        //first check if the group exists
        if(leftGroup.length > 0) {
            //check if the first position exists in activeMoves.
            if (this.checkIfPlaced(leftGroup[0][0],leftGroup[0][1])) {

                //get the liberties of leftGroup
                //if there are no liberties, capture the group
                if (this.getGroupLiberties(leftGroup).length === 0) {
                    if (leftColor != thisColor && (leftColor === true || leftColor === false)) {
                    this.capture(leftGroup)
                        //Will disbale the button of the group if the caputured group is only one piece
                        if (leftGroup.length === 1) {
                            capturedOne = true;
                        }
                    }
                }
            }
        }

        //first check if the group exists
        if(rightGroup.length > 0) {
            //check if the first position exists in activeMoves.
            if (this.checkIfPlaced(rightGroup[0][0],rightGroup[0][1])) {

                //get the liberties of rightGroup
                //if there are no liberties, capture the group
                if (this.getGroupLiberties(rightGroup).length === 0) {
                    if (rightColor != thisColor && (rightColor === true || rightColor === false)) {
                    this.capture(rightGroup)
                        //Will disbale the button of the group if the caputured group is only one piece
                        if (rightGroup.length === 1) {
                            capturedOne = true;
                        }
                    }
                }
            }
        }
        return capturedOne
    },

    //function to check for eyes on every move and disable the neccessary ones. 
    checkEyes: function(lastI,lastJ,capturedOne) {

        //Get the color of the most recent move
        let recentColor = (this.moveCounter % 2 === 0);

        this.group = []

        //for every intersection on the board, get the liberties of this intersection
        for (let i = 0; i < this.liberties.length; i++) {
            //Initially enabled
            let disabled = false
            intersectionLibs = this.getPositionLiberties(this.liberties[i][0],this.liberties[i][1])
            let intersection = document.getElementById(`i${this.liberties[i][0]}j${this.liberties[i][1]}`)
            //i and j coordinates
            let posI = this.liberties[i][0]
            let posJ = this.liberties[i][1]

            //Get the coordinates of the pieces adjacent 
            let upPos = [posI,posJ - 1];
            let downPos = [posI,posJ + 1];
            let leftPos = [posI - 1,posJ];
            let rightPos = [posI + 1,posJ];

            //get the color of all adjacent pieces
            let upColor = this.checkColor(upPos[0],upPos[1])
            let downColor = this.checkColor(downPos[0],downPos[1])
            let leftColor = this.checkColor(leftPos[0],leftPos[1])
            let rightColor = this.checkColor(rightPos[0],rightPos[1])

            //Initialize arrays for the groups in each direction
            let upGroup = [];
            let downGroup = [];
            let leftGroup = [];
            let rightGroup = [];

            //Get the group on each adjacent side of the liberty
            if (this.checkIfPlaced(upPos[0],upPos[1])) {
                this.getGroup(posI, posJ - 1)
                upGroup = this.group;
                this.group = [];
            }
    
            if (this.checkIfPlaced(downPos[0],downPos[1])) {
                this.getGroup(posI, posJ + 1)
                downGroup = this.group
                this.group = [];
                
            }
    
            if (this.checkIfPlaced(leftPos[0],leftPos[1])) {
                this.getGroup(posI - 1, posJ)
                leftGroup = this.group
                this.group = [];
            }
    
            if (this.checkIfPlaced(rightPos[0],rightPos[1])) {
                this.getGroup(posI + 1, posJ)
                rightGroup = this.group
                this.group = [];
            }//Groups attained

            //if there are no liberties, check the color of every position adjacent of this position.
            if (intersectionLibs.length === 0) {
                //if the color of every position adjacent is the same as the recent color, disable this intersection
                if(upColor === recentColor || upPos[1] < 0 || (upColor != recentColor && this.getGroupLiberties(upGroup).length === 1 && this.getGroupLiberties(upGroup)[0][0] === this.liberties[i][0] && this.getGroupLiberties(upGroup)[0][1] === this.liberties[i][1])) {
                    if(downColor === recentColor || downPos[1] > 18 || (downColor != recentColor && this.getGroupLiberties(downGroup).length === 1 && this.getGroupLiberties(downGroup)[0][0] === this.liberties[i][0] && this.getGroupLiberties(downGroup)[0][1] === this.liberties[i][1])) {
                        if(leftColor === recentColor || leftPos[0] < 0 || (leftColor != recentColor && this.getGroupLiberties(leftGroup).length === 1 && this.getGroupLiberties(leftGroup)[0][0] === this.liberties[i][0] && this.getGroupLiberties(leftGroup)[0][1] === this.liberties[i][1])) {
                            if(rightColor === recentColor || rightPos[0] > 18 || (rightColor != recentColor && this.getGroupLiberties(rightGroup).length === 1 && this.getGroupLiberties(rightGroup)[0][0] === this.liberties[i][0] && this.getGroupLiberties(rightGroup)[0][1] === this.liberties[i][1])) {
                                //there is an exception where a piece can be placed on an eye if it will capture a group
                                //if any of the adjacent groups have this liberty as their only liberty, the intersection will be enabled
                                //else, disable the liberty
                                if ((this.multDimRemoveDupes(this.getGroupLiberties(upGroup)).length === 1) || (this.multDimRemoveDupes(this.getGroupLiberties(downGroup)).length === 1) || (this.multDimRemoveDupes(this.getGroupLiberties(leftGroup)).length === 1) || (this.multDimRemoveDupes(this.getGroupLiberties(rightGroup)).length === 1)) {
                                } else {
                                    //disable intersection
                                    disabled = true  
                                }

                                //Another caviat needs to be made since you can capture a piece if that piece was the last move and also captured a group
                                if (capturedOne) {
                                    if (this.liberties[this.liberties.length - 1][0] === posI && this.liberties[this.liberties.length - 1][1] === posJ) {
                                        disabled = true
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //This is part of the caviat that needs to be made so you cannot capture a piece if that piece was the last move and also captured a group
            if (this.getPositionLiberties(lastI,lastJ) === this.liberties[i]) {
                if (this.liberties[this.liberties.length - 1][0] === posI && this.liberties[this.liberties.length - 1][1] === posJ) {
                    disabled = true
                }
            }

            //There is another condition where an eye needs to be disabled if the move will form a group that consists of zero liberties of that color. 

            //If there are no liberties for this intersection and one of the adjacent pieces are not the same color as the recent color
            //get the group of this piece and check its liberties. If it has 1 liberty && 
            //all the groups adjacent to this liberty equal to the recent color have more than 1 liberty
            //disable the intersection

            if (intersectionLibs.length === 0) {

                //Condition for piece above
                if (upColor != recentColor) {
                    if (this.getGroupLiberties(upGroup).length === 1) {
                        if (downColor === recentColor) {
                            if (this.getGroupLiberties(downGroup).length > 1) {
                                disabled = true
                            }
                        }

                        if (leftColor === recentColor) {
                            if (this.getGroupLiberties(leftGroup).length > 1) {
                                disabled = true
                            }
                        }

                        if (rightColor === recentColor) {
                            if (this.getGroupLiberties(rightGroup).length > 1) {
                                disabled = true
                            }
                        }
                    }

                }

                //Condition for piece below
                if (downColor != recentColor) {
                    if (this.getGroupLiberties(downGroup).length === 1) {
                        if (upColor === recentColor) {
                            if (this.getGroupLiberties(upGroup).length > 1) {
                                disabled = true
                            }
                        }

                        if (leftColor === recentColor) {
                            if (this.getGroupLiberties(leftGroup).length > 1) {
                                disabled = true
                            }
                        }

                        if (rightColor === recentColor) {
                            if (this.getGroupLiberties(rightGroup).length > 1) {
                                disabled = true
                            }
                        }
                    }

                }

                //Condition for piece left
                if (leftColor != recentColor) {
                    if (this.getGroupLiberties(leftGroup).length === 1) {
                        if (upColor === recentColor) {
                            if (this.getGroupLiberties(upGroup).length > 1) {
                                disabled = true
                            }
                        }

                        if (downColor === recentColor) {
                            if (this.getGroupLiberties(downGroup).length > 1) {
                                disabled = true
                            }
                        }

                        if (rightColor === recentColor) {
                            if (this.getGroupLiberties(rightGroup).length > 1) {
                                disabled = true
                            }
                        }
                    }

                }

                //Condition for piece right
                if (rightColor != recentColor) {
                    if (this.getGroupLiberties(rightGroup).length === 1) {
                        if (upColor === recentColor) {
                            if (this.getGroupLiberties(upGroup).length > 1) {
                                disabled = true
                            }
                        }

                        if (downColor === recentColor) {
                            if (this.getGroupLiberties(downGroup).length > 1) {
                                disabled = true
                            }
                        }

                        if (leftColor === recentColor) {
                            if (this.getGroupLiberties(leftGroup).length > 1) {
                                disabled = true
                            }
                        }
                    }

                }
            }
        
            //If the intersection is not disabled, set the styling back based on the screen size
            if (disabled === false) {
            intersection.style.position = "absolute"
            intersection.style.width = "25px"
            intersection.style.height = "25px"
            intersection.style.backgroundPosition = "center center"
            intersection.style.marginLeft = "0px"
            intersection.style.marginRight = "0px"
            intersection.style.marginTop = "0px"
            intersection.style.marginBottom = "0px"
            intersection.style.textAlign = "center"
            intersection.style.verticalAlign = "center"
            intersection.setAttribute("onmouseover","hoverThis(this)")
            intersection.setAttribute("onmouseout","dontHoverThis(this)")
            intersection.setAttribute("onclick","game.place(this)")

                //makes sure the button size matches the board size
                if (document.getElementById("myDiv").clientWidth === 350) {
                    intersection.style.top = "10%"
                    intersection.style.left = "10%"
                    intersection.style.width = "15px"
                    intersection.style.height = "15px"
                    intersection.style.backgroundSize = "15px 15px"
                }
            } else {
                intersection.style.backgroundImage = "none"
                intersection.style.background = "none"
                intersection.style.border = "none"
                intersection.setAttribute("onmouseout","");
                intersection.setAttribute("onmouseover","");
                intersection.setAttribute("onclick","");
            }
            
        }
    },

    //function that runs when the game is called 
    callGame: function() {

        //Remove the buttons from the screen
        document.getElementById("callGameButton").style.display = "none"
        document.getElementById("howToInGameButton").style.display = "none"

        //disable every piece button in the liberties array
        for (let i = 0; i < this.liberties.length; i++) {
            document.getElementById(`i${this.liberties[i][0]}j${this.liberties[i][1]}`).style.background = "none"
            document.getElementById(`i${this.liberties[i][0]}j${this.liberties[i][1]}`).style.backgroundImage = "none"
            document.getElementById(`i${this.liberties[i][0]}j${this.liberties[i][1]}`).style.border = "none"
            document.getElementById(`i${this.liberties[i][0]}j${this.liberties[i][1]}`).setAttribute("onmouseout","");
            document.getElementById(`i${this.liberties[i][0]}j${this.liberties[i][1]}`).setAttribute("onmouseover","");
            document.getElementById(`i${this.liberties[i][0]}j${this.liberties[i][1]}`).setAttribute("onclick","");
        }

        //Make a div on the right side of the screen to display final score information 
        var endDiv = document.createElement("div");
        document.body.appendChild(endDiv);
        endDiv.setAttribute("id","endDiv")
        endDiv.style.position = "absolute"

        //paragraphs containing score information and winner
        var para1 = document.createElement("p")
        var para2 = document.createElement("p")
        var para3 = document.createElement("p")
        var para4 = document.createElement("p")
        var para5 = document.createElement("p")

        endDiv.appendChild(para1)
        endDiv.appendChild(para2)
        endDiv.appendChild(para3)
        endDiv.appendChild(para4)
        endDiv.appendChild(para5)

        para1.innerHTML += `Black points: ${this.blackCaptured + this.blackLibs}`
        para2.innerHTML += `Liberties: ${this.blackLibs}, Captures: ${this.blackCaptured}`
        para3.innerHTML += `White points: ${this.whiteCaptured + this.whiteLibs}`
        para4.innerHTML += `Liberties: ${this.whiteLibs}, Captures: ${this.whiteCaptured}`
        if ((this.blackCaptured + this.blackLibs) > (this.whiteCaptured + this.whiteLibs)) {
            para5.innerHTML += "Black Wins!"
        } else {
            para5.innerHTML += "White Wins!"
        }

        para1.style.fontSize = "70%"
        para2.style.fontSize = "45%"
        para3.style.fontSize = "70%"
        para4.style.fontSize = "45%"
        para5.style.fontSize = "90%"

        //media queries for text
        const mediaWidthFoo2 = (mediaWidth2) => {
            if (mediaWidth2.matches) {
                para1.style.fontSize = "35px"
                para2.style.fontSize = "25px"
                para3.style.fontSize = "35px"
                para4.style.fontSize = "25px"
                para5.style.fontSize = "45px"
                document.getElementById("exitGameEndScreen").style.fontSize = "50px"
                document.getElementById("studyGameEndScreen").style.fontSize = "40px"
            } else {
                para1.style.fontSize = "70%"
                para2.style.fontSize = "45%"
                para3.style.fontSize = "70%"
                para4.style.fontSize = "45%"
                para5.style.fontSize = "90%"
                document.getElementById("exitGameEndScreen").style.fontSize = "80px"
                document.getElementById("studyGameEndScreen").style.fontSize = "70px"
            }
        }

        //media queries for text
        const mediaWidthFoo3 = (mediaWidth3) => {
            if (mediaWidth3.matches) {
                document.getElementById("exitGameEndScreen").style.fontSize = "50px"
                document.getElementById("studyGameEndScreen").style.fontSize = "40px"
            } else {
                document.getElementById("exitGameEndScreen").style.fontSize = "80px"
                document.getElementById("studyGameEndScreen").style.fontSize = "70px"
            }
        }        

        //Make exit game button on the end screen
        var exitGameButton = document.createElement("button")
        exitGameButton.type = "button"
        exitGameButton.setAttribute("onclick","game.exitGame()")
        exitGameButton.setAttribute("id","exitGameEndScreen")
        endDiv.appendChild(exitGameButton)
        exitGameButton.style.position = "absolute"
        exitGameButton.style.bottom = "1%"
        exitGameButton.style.height = "100px"
        exitGameButton.style.width = "90%"
        exitGameButton.style.right = "5%"
        exitGameButton.style.backgroundImage = "none"
        exitGameButton.style.backgroundColor = "#1E1E1E"
        exitGameButton.style.color = "#A0A0A0"
        exitGameButton.innerHTML += "Exit Game"

        //Make exit game button on the end screen
        var studyGameButton = document.createElement("button")
        studyGameButton.type = "button"
        studyGameButton.setAttribute("onclick","game.studyGame()")
        studyGameButton.setAttribute("id","studyGameEndScreen")
        endDiv.appendChild(studyGameButton)
        studyGameButton.style.position = "absolute"
        studyGameButton.style.bottom = "16%"
        studyGameButton.style.height = "100px"
        studyGameButton.style.width = "90%"
        studyGameButton.style.right = "5%"
        studyGameButton.style.backgroundImage = "none"
        studyGameButton.style.backgroundColor = "#1E1E1E"
        studyGameButton.style.color = "#A0A0A0"
        studyGameButton.innerHTML += "Study Game"

        // //display the move count on every piece
        this.displayMoveCount(false)

        var mediaWidth2 = window.matchMedia("(max-width: 1500px")
        mediaWidthFoo2(mediaWidth2)
        mediaWidth2.addListener(mediaWidthFoo2)

        var mediaWidth3 = window.matchMedia("(max-width: 1860px")
        mediaWidthFoo2(mediaWidth3)
        mediaWidth3.addListener(mediaWidthFoo3)
    },

    //Keeps track of the display status for moveCount
    displayStatus: false,

    //function that displays the moveCount when clicked
    displayMoveCount(currentStatus) {
        //For every piece in active moves, get the index from saved moves and display it inide the button
        for (let i = 0; i < this.activeMoves.length; i++) {
        let piece = [this.activeMoves[i][0],this.activeMoves[i][1]]
        let elem = document.getElementById(`i${piece[0]}j${piece[1]}`)
            if (currentStatus === false) {
                let move = this.multDimIndex(piece[0],piece[1],this.savedMoves) + 1
                elem.innerHTML = move
                this.displayStatus = true
            } else {
                elem.innerHTML = ""
                this.displayStatus = false
            }
        } 
    },


    studyGame: function() {
        //Remove the endDiv from screen
        document.getElementById("endDiv").style.display = "none"
        document.getElementById("moveCountButton").style.display = "none"

        //Remove all pieces from the board
        for (let i = 0; i < this.activeMoves.length; i++) {
            document.getElementById(`i${this.activeMoves[i][0]}j${this.activeMoves[i][1]}`).style.backgroundImage = 'none'
            document.getElementById(`i${this.activeMoves[i][0]}j${this.activeMoves[i][1]}`).style.background = 'none'
            document.getElementById(`i${this.activeMoves[i][0]}j${this.activeMoves[i][1]}`).style.border = 'none'
            document.getElementById(`i${this.activeMoves[i][0]}j${this.activeMoves[i][1]}`).innerHTML = ''
        }

        //create element for slider
        //did not fully understand 
        //https://www.w3schools.com/howto/howto_js_rangeslider.asp
        var slider = document.createElement("input")
        var sliderDiv = document.createElement("div")
        var sliderP = document.createElement("p")
        document.body.appendChild(sliderDiv)
        sliderDiv.appendChild(slider)
        sliderDiv.appendChild(sliderP)
        slider.type = "range"
        slider.setAttribute("min","0")    
        slider.setAttribute("max",`${this.savedMoves.length}`)
        slider.setAttribute("value","0")
        slider.setAttribute("orient","vertical")
        slider.setAttribute("id","slider")
        slider.style.width = "8px"
        slider.style.height = "800px"
        slider.style.position = "absolute"
        slider.style.right = "2%"

        sliderP.innerHTML = `Move Count: ${slider.value}`
        sliderP.setAttribute("id","sliderPara")
        sliderP.style.position = "absolute"
        sliderP.style.right = "6%"
        sliderP.style.fontSize = "40px"
        sliderP.style.fontStyle = "bold"

        let moves = this.activeSavedMoves
        let savedMoves = this.savedSavedMoves
        slider.oninput = function() {
            sliderP.innerHTML = `Move Count: ${this.value}`
            if (this.value < 1) {
                //Turn off all buttons
                for (let i = 0; i < 19; i++) {
                    for (let j = 0; j < 19; j++) {
                        document.getElementById(`i${i}j${j}`).style.backgroundImage = "none"
                        document.getElementById(`i${i}j${j}`).style.background = "none"
                        document.getElementById(`i${i}j${j}`).style.border = "none"
                        document.getElementById(`i${i}j${j}`).innerHTML = ""
                    }
                }
            } else {

            
                //Turn off all buttons
                for (let i = 0; i < 19; i++) {
                    for (let j = 0; j < 19; j++) {
                        document.getElementById(`i${i}j${j}`).style.backgroundImage = "none"
                        document.getElementById(`i${i}j${j}`).style.background = "none"
                        document.getElementById(`i${i}j${j}`).style.border = "none"
                        document.getElementById(`i${i}j${j}`).innerHTML = ""
                    }
                }

                //Turn on the buttons that need to be on
                for (let i = 0; i < moves[this.value - 1].length; i++) {
                    let posI = moves[this.value - 1][i][0]
                    let posJ = moves[this.value - 1][i][1]

                    let moveCount = game.multDimIndex(posI,posJ,savedMoves[this.value - 1]) + 1
        
                    //If it is an even numbered move, white goes. Otherwise, black goes. 
                    if (moveCount % 2 === 0) {
                        document.getElementById(`i${posI}j${posJ}`).style.backgroundImage = 'url(images/whitePiece.png)'
                    } else {
                        document.getElementById(`i${posI}j${posJ}`).style.backgroundImage = 'url(images/blackPiece.png)'
                    }

                    if (document.getElementById("myDiv").clientWidth === 750) {

                        //Styling applied to every button clicked if the board is 750 pixels across
                        document.getElementById(`i${posI}j${posJ}`).style.backgroundSize = "45px 45px"
                        document.getElementById(`i${posI}j${posJ}`).style.borderRadius = "15px"
                        document.getElementById(`i${posI}j${posJ}`).style.width = "30px"
                        document.getElementById(`i${posI}j${posJ}`).style.height = "30px"
                        document.getElementById(`i${posI}j${posJ}`).style.backgroundPosition = "center center"
                        document.getElementById(`i${posI}j${posJ}`).style.top = "13%"
                        document.getElementById(`i${posI}j${posJ}`).style.left = "13%"

                        //Styling applied to every button no matter size
                        document.getElementById(`i${posI}j${posJ}`).style.backgroundPosition = "center center"
                        document.getElementById(`i${posI}j${posJ}`).style.border = "1px solid black"
                    } else {

                        //Styling applied if go board is not 750 pixels across
                        document.getElementById(`i${posI}j${posJ}`).style.backgroundSize = "15px 15px"
                        document.getElementById(`i${posI}j${posJ}`).style.borderRadius = "7px"
                        document.getElementById(`i${posI}j${posJ}`).style.width = "15px"
                        document.getElementById(`i${posI}j${posJ}`).style.height = "15px"

                        //Styling applied to every button no matter size
                        document.getElementById(`i${posI}j${posJ}`).style.backgroundPosition = "center center"
                        document.getElementById(`i${posI}j${posJ}`).style.border = "1px solid black"
                    }

                    //For every piece in this moveCount of activeSavedMoves, set the inner html based on the displayStatusStudy
                    if (this.displayStatusStudy === false) {
                        document.getElementById(`i${moves[this.value - 1][i][0]}j${moves[this.value - 1][i][1]}`).innerHTML = ""
                    } else {
                        document.getElementById(`i${moves[this.value - 1][i][0]}j${moves[this.value - 1][i][1]}`).innerHTML = moveCount
                    }
                }
            }   
        }
    },

    exitGame: function () {
        window.location.reload()
    },
}
