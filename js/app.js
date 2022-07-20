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

    //Call the makeCoors function to make the liberties on the board
    game.makeCoors();

    //Using media queries in JS is something I did not really understand, and my annotation on it probably reflects that.
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
    
}

//game object
const game = {

    //Will keep track of what move it is
    moveCounter: 0,

    //Saves the postion of the active moves. Multi-dimensional array of coordinates
    activeMoves: [],

    //Saves the position of every move that occurs in order. Multi-dimensional array of coordinates
    savedMoves: [],

    //Saves the enemy grouped pieces. Multi-dimensional array of coordinates
    group: [],
    
    //Keeps track of the active liberties on the board. Initally, every intersection is a liberty.
    //Is empty right now but filled upon startGame
    liberties: [],

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

        //Get the i and j coordinates of the clicked button by using the location of the parent div
        iPos = Math.round((parseFloat(((document.getElementById(document.getElementById(obj.id).parentElement.id).style.left)))-0.55)/5.2)
        jPos = Math.round((parseFloat(((document.getElementById(document.getElementById(obj.id).parentElement.id).style.top)))-0.55)/5.2)
        
        //Push these moves to activeMoves and savedMoves
        this.activeMoves.push([iPos,jPos])
        this.savedMoves.push([iPos,jPos])

        //function that removes this position from liberties array
        this.multDimRemove(iPos,jPos,this.liberties)

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

        //function that checks for capture
        this.checkCapture(iPos,jPos)

        //Save the id of the clicked button so that the green border can be changed to black
        buttonId = obj.id;
        return buttonId
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

    //function to get the color of a piece at a specific position
    checkColor: function(posI,posJ) {
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
        pieceColor = this.checkColor(posI,posJ);

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

    //function that takes a position and outputs all the liberties of that piece
    getPieceLiberties: function(posI,posJ) {
        let pieceLibs = [];

        console.log(posI)
        //If the position up is in the liberties array, push this position to pieceLibs
        console.log(this.multDimIncludes(posI,posJ - 1,this.liberties))
        if (this.multDimIncludes(posI,posJ - 1,this.liberties)) {
            pieceLibs.push([posI, posJ - 1])
            console.log("push")
        }

        //If the position down is in the liberties array, push this position to pieceLibs
        if (this.multDimIncludes(posI,posJ + 1,this.liberties)) {
            pieceLibs.push([posI, posJ + 1])
            console.log("push")
        }
    
        //If the position left is in the liberties array, push this position to pieceLibs
        if (this.multDimIncludes(posI - 1,posJ,this.liberties)) {
            pieceLibs.push([posI - 1, posJ])
            console.log("push")
        }

        //If the position right is in the liberties array, push this position to pieceLibs
        if (this.multDimIncludes(posI + 1,posJ,this.liberties)) {
            pieceLibs.push([posI + 1, posJ])
            console.log("push")
        }

        //return pieceLibs
        return pieceLibs
    },

    //funtion that takes a group as input and outputs all the liberties of this group.
    //group is a multidimensional coordinate array
    getGroupLiberties: function(group) {

        //loop over the array of coordinates and getPieceLiberties on each position. 
        //push each value to libs array

        let libs = [];

        for (let i = 0; i < group.length; i++) {

            const libArr = this.getPieceLiberties(group[i][0],group[i][1])
            for (let j = 0; j < libArr.length; j++) {
                libs.push([libArr[j][0],libArr[j][1]]);   
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
    },

    //function that checks adjacent pieces for capture on every place
    checkCapture: function(posI,posJ) {

        //get the color of the current piece
        let currentColor = this.checkColor(posI,posJ)

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

        //first checks if adjacent piece has been placed
        //then checks adjacent piece to see if it is opposite color 
        //if the piece is the opposite color, get the group that contains this piece
        
        if (this.checkIfPlaced(upPos[0],upPos[1]) === true) {
            if (currentColor != upColor) {
                this.getGroup(posI, posJ - 1)
                upGroup = this.group;
                this.group = [];
            }
        }

        if (this.checkIfPlaced(downPos[0],downPos[1]) === true) {
            if (currentColor != downColor) {
                this.getGroup(posI, posJ + 1)
                downGroup = this.group
                this.group = [];
            }
        }

        if (this.checkIfPlaced(leftPos[0],leftPos[1]) === true) {
            if (currentColor != leftColor) {
                this.getGroup(posI - 1, posJ)
                leftGroup = this.group
                this.group = [];
            }
        }

        if (this.checkIfPlaced(rightPos[0],rightPos[1]) === true) {
            if (currentColor != rightColor) {
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
                console.log(upGroup)
                console.log(this.getGroupLiberties(upGroup))
                //get the liberties of upGroup
                //if there are no liberites, capture the group
                if (this.getGroupLiberties(upGroup).length === 0) {
                    this.capture(upGroup)
                }
            }
        }
        
        //first check if the group exists
        if(downGroup.length > 0) {
            //check if the first position exists in activeMoves.
            if (this.checkIfPlaced(downGroup[0][0],downGroup[0][1])) {

                //get the liberties of downGroup
                //if there are no liberites, capture the group
                if (this.getGroupLiberties(downGroup).length === 0) {
                    this.capture(downGroup)
                }
            }
        }

        //first check if the group exists
        if(leftGroup.length > 0) {
            //check if the first position exists in activeMoves.
            if (this.checkIfPlaced(leftGroup[0][0],leftGroup[0][1])) {

                //get the liberties of leftGroup
                //if there are no liberites, capture the group
                if (this.getGroupLiberties(leftGroup).length === 0) {
                    this.capture(leftGroup)
                }
            }
        }

        //first check if the group exists
        if(rightGroup.length > 0) {
            //check if the first position exists in activeMoves.
            if (this.checkIfPlaced(rightGroup[0][0],rightGroup[0][1])) {

                //get the liberties of rightGroup
                //if there are no liberites, capture the group
                if (this.getGroupLiberties(rightGroup).length === 0) {
                    this.capture(rightGroup)
                }
            }
        }
    },
}
