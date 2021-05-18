var pieceCoordinates = new Array();
var direction = new Array();
var puzzleName = "";
//creates array with coordinates for pieces
function arrayCreate(width, height){
	
	var count = 0;
	for(var x = 0; x < width; x++){
		for(var y = 0; y < height; y++){
			pieceCoordinates[count] = new Array(x, y);
			count++;
		}
	}
}

//first function called for puzzle
function startUp(count, puzzle, numberWidth, numberHeight, pieceWidth, pieceHeight){
	puzzleName = puzzle;
	
	//for loop to add images to page
	var counter = 0;
	for(x = 0; x < numberWidth; x++){
		for (y = 0; y < numberHeight; y++){
		
	//create image tag with src and id 
	const image = document.createElement("canvas");
	var imgId = "img" + counter;
	image.setAttribute("id", imgId);
	const imageTemp = document.createElement("img");
	var src = "../../img/" + puzzleName + ".jpg";
		
	image.setAttribute("z-index", 4);
	imageTemp.setAttribute("src", src);
	image.setAttribute("draggable", "false");
	var imgHeight = imageTemp.height;
	var imgWidth = imageTemp.width;
	
	direction[counter] = new Array();
	
	//creating direction array
	//direction[counter] = {left, up, right, down}
	for(i = 0; i < 4; i++){
		var inOrOut = Math.floor(Math.random() * 2);
		
		if (i==0){//left
			if (x==0){
				direction[counter][i] = "n";
			}
			else if (direction[counter-numberHeight][2] == "i"){
				direction[counter][i] = "o";
				
			}
			else if (direction[counter-numberHeight][2] == "o"){
				direction[counter][i] = "i";
			}			
		}
		else if (i==1){//up
			if(y==0){
				direction[counter][i] = "n";
			}
			else if (direction[counter-1][3] == "i"){
				direction[counter][i] = "o";
				
			}
			else if (direction[counter-1][3] == "o"){
				direction[counter][i] = "i";
			}
		}
		else if (i==2){//right
			if (x==(numberWidth-1)){
				direction[counter][i] = "n";
			}
			else if (inOrOut == 0){
				direction[counter][i] = "i";
			}
			else {
				direction[counter][i] = "o";
			}
		}
		else if (i==3){//down
			if (y==(numberHeight-1)){
				direction[counter][i] = "n";
			}
			else if (inOrOut == 0){
				direction[counter][i] = "i";
			}
			else {
				direction[counter][i] = "o";
			}
		}
	}
	
	var startX;
	var startY;
	var height;
	var width;
	
	//checking direction for width
	if (direction[counter][0] == "o"){
		startX = pieceWidth/4;
		if (direction[counter][2] == "o"){
			width = pieceWidth + pieceWidth/4 + pieceWidth/4;
		}
		else {
			width = pieceWidth + pieceWidth/4;
		}
	}
	else {	// direction[counter][0] = "i"
		startX = 0;
		if (direction[counter][2] == "o"){
			width = pieceWidth + pieceWidth/4;
		}
		else {
			width = pieceWidth;
		}
	}
	
	//checking direction for height
	if (direction[counter][1] == "o"){
		startY = pieceHeight/4;
		if (direction[counter][3] == "o"){
			height =  pieceHeight + pieceHeight/4 + pieceHeight/4;
		}
		else {
			height = pieceHeight + pieceHeight/4;
		}
	}
	else {	// direction[counter][1] = "i"
		startY = 0;
		if (direction[counter][3] == "o"){
			height = pieceHeight + pieceHeight/4;
		}
		else {
			height = pieceHeight;
		}
	}
	
	image.width = width;
	image.height = height;
	
	//drawing piece based on direction array
	var ctx = image.getContext("2d");	
        ctx.moveTo(startX, startY);        
        
        //top
        if (direction[counter][1] == "i"){
	        ctx.lineTo(startX+pieceWidth/3, startY);
	        ctx.bezierCurveTo(startX+pieceWidth/3, startY+pieceHeight/4, startX+(pieceWidth/3)*2, startY+pieceHeight/4, startX+(pieceWidth/3)*2, startY);
	        ctx.lineTo(startX+pieceWidth, startY)
		}
        else if (direction[counter][1] == "o") {
        	ctx.lineTo(startX+pieceWidth/3, startY);
	        ctx.bezierCurveTo(startX+pieceWidth/3, startY-pieceHeight/4, startX+(pieceWidth/3)*2, startY-pieceHeight/4, startX+(pieceWidth/3)*2, startY);
	        ctx.lineTo(startX+pieceWidth, startY)
        }
        else {
        	ctx.moveTo(startX+pieceWidth, startY);
        }
        
        //right
        if (direction[counter][2] == "i"){
        	ctx.lineTo(startX+pieceWidth, startY+pieceHeight/3);
	        ctx.bezierCurveTo(startX+pieceWidth-pieceWidth/4, startY+pieceHeight/3, startX+pieceWidth-pieceWidth/4, startY+(pieceHeight/3)*2, startX+pieceWidth, startY+(pieceHeight/3)*2);
	        ctx.lineTo(startX+pieceWidth, startY+pieceHeight);
		}
        else if (direction[counter][2] == "o") {
        	ctx.lineTo(startX+pieceWidth, startY+pieceHeight/3);
            ctx.bezierCurveTo(startX+pieceWidth+pieceWidth/4, startY+pieceHeight/3, startX+pieceWidth+pieceWidth/4, startY+(pieceHeight/3)*2, startX+pieceWidth, startY+(pieceHeight/3)*2);
            ctx.lineTo(startX+pieceWidth, startY+pieceHeight);
        }
        else {
        	ctx.lineTo(startX+pieceWidth, startY+pieceHeight);
        }
	    
	    //bottom
        if (direction[counter][3] == "i"){
        	ctx.lineTo(startX+pieceWidth-pieceWidth/3, startY+pieceHeight);
	        ctx.bezierCurveTo(startX+pieceWidth-pieceWidth/3, startY+pieceHeight-pieceHeight/4, startX+pieceWidth-(pieceWidth/3)*2, startY+pieceHeight-pieceHeight/4, startX+pieceWidth/3, startY+pieceHeight);
	        ctx.lineTo(startX, startY+pieceHeight);
		}
        else if (direction[counter][3] == "o") {
        	ctx.lineTo(startX+pieceWidth-pieceWidth/3, startY+pieceHeight);
        	ctx.bezierCurveTo(startX+pieceWidth-pieceWidth/3, startY+pieceHeight+pieceHeight/4, startX+pieceWidth-(pieceWidth/3)*2, startY+pieceHeight+pieceHeight/4, startX+pieceWidth/3, startY+pieceHeight);
            ctx.lineTo(startX, startY+pieceHeight);
        }
        else {
        	ctx.lineTo(startX, startY+pieceHeight);
        }
        
        //left
        if (direction[counter][0] == "i"){
        	ctx.lineTo(startX, startY+(pieceHeight/3)*2);
	        ctx.bezierCurveTo(startX+pieceWidth/4, startY+(pieceHeight/3)*2, startX+pieceWidth/4, startY+pieceHeight/3, startX, startY+pieceHeight/3);
	        ctx.lineTo(startX, startY);
		}
        else if (direction[counter][0] == "o") {
        	ctx.lineTo(startX, startY+(pieceHeight/3)*2);
        	ctx.bezierCurveTo(startX-pieceWidth/4, startY+(pieceHeight/3)*2, startX-pieceWidth/4, startY+pieceHeight/3, startX, startY+pieceHeight/3);
        	ctx.lineTo(startX, startY);
        }
        else {
        	ctx.lineTo(startX, startY);
        }
        
        ctx.stroke();
        
        ctx.clip();
        //drawing graphics onto jigsaw shape
        ctx.drawImage(imageTemp, x*pieceWidth-startX, y*pieceHeight-startY, width, height, 0, 0, width, height);
	
	const group = document.createElement("div");
	var divId = "div" + counter;
	group.setAttribute("id", divId);
	group.setAttribute("draggable", "false");
	group.setAttribute("z-index", 5);
	
	document.getElementById("mydiv").appendChild(group);
	
	document.getElementById(divId).appendChild(image);
	
	//set position of Div and img
	image.style.top = 0 + "px";
	image.style.left = 0 + "px";
	
	var screenWidth = document.getElementById("mydiv").clientWidth;
	var screenHeight = document.getElementById("mydiv").clientHeight;
	var leftPos = Math.floor(Math.random() * (screenWidth - pieceWidth));
	var topPos = Math.floor(Math.random() * (screenHeight - pieceHeight));
	
	group.style.left = leftPos + "px";
	group.style.top = topPos + "px";
	
	//create drag element of each img added
	dragElement(document.getElementById(divId), count, pieceWidth, pieceHeight);
	document.getElementById(divId).style.position = "absolute";
	counter++;	
		}
	}	
}

//merges pieces in jigsaw
function combine(a, b, c, currentDiv, count, pieceWidth, pieceHeight){
	//a = imgA	b = imgB  c = direction
	
	//parent DIV of each img element
	var divA = document.getElementById(a).parentNode;
	var divB = document.getElementById(b).parentNode;
	
	//created this to get offset of piece easier
	var imgA = document.getElementById(a);
	//gets imgB element
	var imgB = document.getElementById(b);
	
	var numA = Number(a.slice(3));
	var numB = Number(b.slice(3));
	
	var diffXA;
	var diffYA;
	var diffXB;
	var diffYB;
	
	//this wouldn't pass if they were already merged
	if(!(divA.id == divB.id)){
	
		//adds imgB element to div of imgA
		divA.appendChild(imgB);
		
		document.getElementById(b).style.position = "absolute";
		
		//finding actual corner of piece to help with positioning
		  if (direction[numA][0] == "o"){
				diffXA =  Math.floor(pieceWidth/4);
			}
		  else diffXA = 0;
		  
		  if (direction[numA][1] == "o"){
			  diffYA =  Math.floor(pieceHeight/4);
			}
		  else diffYA = 0;
		  
		  if (direction[numB][0] == "o"){
			  diffXB =  Math.floor(pieceWidth/4);
			}
		  else diffXB = 0;
		  
		  if (direction[numB][1] == "o"){
			  diffYB =  Math.floor(pieceHeight/4);
			}
		  else diffYB = 0;
		
		switch(c){
			case "left":
				//gets offSet of imgA
				var stringLeft = imgA.style.left;//pixels left
				var offSetLeft = Number(stringLeft.slice(0, (stringLeft.length-2)))+diffXA;//pixel number left
				var stringTop = imgA.style.top;//pixels up
				var offSetTop = Number(stringTop.slice(0, (stringTop.length-2)))+diffYA;//pixel number up
				
				imgB.style.top = offSetTop - diffYB + "px";
				imgB.style.left = offSetLeft - pieceWidth - diffXB + "px";
				checkPieces(currentDiv, count, pieceWidth, pieceHeight)				
				break;
		
			case "up":
				//gets offSet of imgA bot left and top
				var stringLeft = imgA.style.left;
				var offSetLeft = Number(stringLeft.slice(0, (stringLeft.length-2)))+diffXA;
				var stringTop = imgA.style.top;
				var offSetTop = Number(stringTop.slice(0, (stringTop.length-2)))+diffYA;
				
				//positions imgB based on A
				imgB.style.top = offSetTop - pieceHeight - diffYB + "px";
				imgB.style.left = offSetLeft - diffXB + "px";
				checkPieces(currentDiv, count, pieceWidth, pieceHeight)
				break;
				
			case "right":
				//gets offSet of imgA
				var stringLeft = imgA.style.left;
				var offSetLeft = Number(stringLeft.slice(0, (stringLeft.length-2)))+diffXA;
				var stringTop = imgA.style.top;
				var offSetTop = Number(stringTop.slice(0, (stringTop.length-2)))+diffYA;
				
				imgB.style.top = offSetTop - diffYB + "px";
				imgB.style.left = offSetLeft + pieceWidth - diffXB + "px";
				checkPieces(currentDiv, count, pieceWidth, pieceHeight)
				break;
			
			case "down":
				//gets offSet of imgA
				var stringLeft = imgA.style.left;
				var offSetLeft = Number(stringLeft.slice(0, (stringLeft.length-2)))+diffXA;
				var stringTop = imgA.style.top;
				var offSetTop = Number(stringTop.slice(0, (stringTop.length-2)))+diffYA;
				
				imgB.style.top = offSetTop + pieceHeight - diffYB + "px";
				imgB.style.left = offSetLeft - diffXB + "px";
				checkPieces(currentDiv, count, pieceWidth, pieceHeight)
				break;
				
		}//end of switch
	}//end of if !(divA.id == divB.id)
}

//checks position of each piece
function checkPieces(currentDiv, count, pieceWidth, pieceHeight){
	
	//get length of currentDiv to loop through its pieces
	var currentDivElem = document.getElementById(currentDiv);
	var divLength = currentDivElem.childNodes.length;
	
	//looping through elements in the div
	for (var i = 0; i < divLength; i++){
	  
	  var currentPiece = currentDivElem.childNodes[i];
		
	  //To find boundaries/position of current
	  var currentPos = currentPiece.getBoundingClientRect();
	  
	  var currentValue = Number((currentPiece.id).slice(3));
	  var currentArray = pieceCoordinates[currentValue];
	  var leftPos = new Array(currentArray[0]-1, currentArray[1]);
	  var upPos = new Array(currentArray[0], currentArray[1]-1);		
	  var rightPos = new Array(currentArray[0]+1, currentArray[1]);		
	  var downPos = new Array(currentArray[0], currentArray[1]+1);
	  
	  //looping through all elements
	  for (var x = 0; x < count; x++){
		  
		  var currentDiffX;
		  var currentDiffY;
		  var tempDiffX;
		  var tempDiffY;
		  var tempPiece = document.getElementById('img' + x);
		  
		  //find position of currentTemp element
		  var closePos = tempPiece.getBoundingClientRect();
		  
		  
		  //this is where current piece is compared to piece x
		  ///////////////////
		  if (direction[currentValue][0] == "o"){
				currentDiffX = pieceWidth/4;
			}
		  else currentDiffX = 0;
		  
		  if (direction[currentValue][1] == "o"){
				currentDiffY = pieceHeight/4;
			}
		  else currentDiffY = 0;
		  /////////////////
		  if (direction[x][0] == "o"){
				tempDiffX = pieceWidth/4;
			}
		  else tempDiffX = 0;
		  
		  if (direction[x][1] == "o"){
				tempDiffY = pieceHeight/4;
			}
		  else tempDiffY = 0;
		  
		  ///////////////////
		  
		  
		  //compare each other pieces array to array left, up, right, down
		  if(pieceCoordinates[x][0] == leftPos[0] && pieceCoordinates[x][1] == leftPos[1]){//Left
			  if (currentPos.y+currentDiffY <= closePos.y+10+tempDiffY && currentPos.y+currentDiffY >= closePos.y-10+tempDiffY && currentPos.x+currentDiffX - pieceWidth <= closePos.x+10+tempDiffX && currentPos.x+currentDiffX - pieceWidth >= closePos.x-10+tempDiffX){
		  			combine(currentPiece.id, ("img" + x), "left", currentDiv, count, pieceWidth, pieceHeight);
			  }
		  } //end of checking if leftPos
		  else if(pieceCoordinates[x][0] == upPos[0] && pieceCoordinates[x][1] == upPos[1]){//Up
			  if (currentPos.y + currentDiffY - pieceHeight <= closePos.y+10 + tempDiffY && currentPos.y + currentDiffY - pieceHeight >= closePos.y-10 + tempDiffY && currentPos.x + currentDiffX <= closePos.x+10 + tempDiffX && currentPos.x + currentDiffX >= closePos.x-10 + tempDiffX){
		  			combine(currentPiece.id, ("img" + x), "up", currentDiv, count, pieceWidth, pieceHeight);
			  }
		  }//end of checking if upPos
		  else if(pieceCoordinates[x][0] == rightPos[0] && pieceCoordinates[x][1] == rightPos[1]){//Right			  
			  if (currentPos.y + currentDiffY <= closePos.y+10 + tempDiffY && currentPos.y + currentDiffY >= closePos.y-10 + tempDiffY && currentPos.x + currentDiffX + pieceWidth <= closePos.x+10 + tempDiffX && currentPos.x + currentDiffX + pieceWidth >= closePos.x-10 + tempDiffX){
		  			combine(currentPiece.id, ("img" + x), "right", currentDiv, count, pieceWidth, pieceHeight);
			  }
		  }//end of checking if rightPos
		  else if(pieceCoordinates[x][0] == downPos[0] && pieceCoordinates[x][1] == downPos[1]){//Down
			  if (currentPos.y + currentDiffY + pieceHeight <= closePos.y+10 + tempDiffY && currentPos.y + currentDiffY + pieceHeight >= closePos.y-10 + tempDiffY && currentPos.x + currentDiffX <= closePos.x+10 + tempDiffX && currentPos.x + currentDiffX >= closePos.x-10 + tempDiffX){
		  			combine(currentPiece.id, ("img" + x), "down", currentDiv, count, pieceWidth, pieceHeight);
			  }
		  }//end of checking if downPos
	  }//end of for loop through all pieces in array
	}//end of for loop through all pieces in div
	
	
	var bool = false;
	for(var x = 0; x < count; x++){
		var size = document.getElementById("div" + x).childNodes.length;
		if (size == count) bool = true;
	}
	
	if (bool == true) finish();
}

//handles the moving of all elements in the jigsaw
function dragElement(elmnt, count, pieceWidth, pieceHeight) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = mouseDown;

  function mouseDown(e) {
    //get the cursor position at startup:
    pos1 = e.clientX;
    pos2 = e.clientY;
    document.onmouseup = closeDragElement;
    //call a function whenever the cursor moves:
    document.onmousemove = elementDrag;    
  }

  function elementDrag(e) {
    //calculate the new cursor position:
    pos3 = pos1 - e.clientX;
    pos4 = pos2 - e.clientY;
    pos1 = e.clientX;
    pos2 = e.clientY;
    //set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos4) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos3) + "px";  
    
    document.onkeydown = rotate;
  } 

  function closeDragElement() {
	  
	  checkPieces(elmnt.id, count, pieceWidth, pieceHeight);
	  
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  //rotates current piece by 90 degrees
  function rotate(e) {
	    var key = e.which;
	    if (key == 82) {
	    	var degrees = 0;
	    	
	    	var transform = elmnt.style.transform;
	    	if (transform == "") elmnt.style.transform = 'rotate(90deg)';
	    	else {
	    		var substring = transform.substring(7, transform.indexOf("d"));
		    	degrees = parseInt(substring, 10)
		    	degrees +=90;
		    	elmnt.style.transform = 'rotate(' + degrees + 'deg)';
	    	}
	    }
	}
  
}

//shows the transparent image on the screen
function ghost(){
	
	if (!(document.getElementById("ghostImage").src)){
	document.getElementById("ghostImage").setAttribute("src", "../../img/" + puzzleName + ".jpg");
	}
	else {
		document.getElementById("ghostImage").removeAttribute("src");
	}
	
}

var timeElapsed = 0;
var myTimer = 0;
//starts timer for competitive game mode
function startTimer() {
	
	const time_ = document.createElement("span");
	time_.setAttribute("id", "time");
	time_.setAttribute("style", "color: white");
	document.getElementById("buttons").appendChild(time_);
	
    myTimer = setInterval(function(){
    	var time = document.getElementById("time");
        time.innerHTML = "Timer: " + timeElapsed;
        timeElapsed += 1;
    }, 1000) ;
}

//creates a form and then submits time as a parameter to the next page
function finish(){
	const form = document.createElement('form');
	  form.method = "post";
	  form.action = "finish";
	  
	  const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = "time";
      hiddenField.value = timeElapsed;

      form.appendChild(hiddenField);
	  document.getElementById("mydiv").appendChild(form);
	  form.submit();
}

//shows settings page
function settings(){
	var setting_ = document.getElementById("settings");
	
	if(setting_.style.display == "none") setting_.style.display = "block";
	else setting_.style.display = "none";
	
	document.getElementById("ghostOpacity").oninput = function() {
		  console.log(this.value);
		  
		  var opacityValue = this.value/10;
		  console.log(opacityValue);
		  document.getElementById("ghostImage").style.opacity = opacityValue;
		  
		  
		}
}

//shows hint around pieces
function hint(count, height){
	
	//randomise first piece to hint
	var rand = Math.ceil(Math.random() * count);
	//randomises direction from that piece to hint
	var direction = Math.ceil(Math.random() * 3);//0, 1, 2, 3
	var piece = 0;
	//left
	if (direction == 0){
		piece = rand-height;
	}
	//up
	else if (direction == 1){
		piece = rand-1;
	}
	//right
	else if (direction == 2){
		piece = rand+height;
	}
	//down
	else if (direction == 3){
		piece = rand+1;
	}
	
	//check that both pieces exist
	//corner pieces do not have all directions
	if (piece<0 || piece>=count || rand<0 || rand>=count) hint(count, height);
	//edge pieces do not have all directions
	else if ((rand%height == 0 && piece == rand-1) || (piece%height == 0 && piece == rand+1)) hint(count, height);
	else{
		var imgA = document.getElementById("img" + rand);
		var imgB = document.getElementById("img" + piece);
		
		if (imgA.parentNode == imgB.parentNode) hint(count, height);
		else {
			imgA.style.border = "thick solid #FFD700";
			imgB.style.border = "thick solid #FFD700";
			//timer to remove hint after 3 seconds
			setTimeout(function(){
				imgA.style.border = "";
				imgB.style.border = "";
			}, 3000);
			
		}
	}
	
}

//changes colour of both background and secondary
function changeColour(object, colour){
	//object is background or secondary to be changed
	
	if (object == "background"){
		document.getElementById("mydiv").style.backgroundColor = colour;
	}
	else {
		document.getElementById("settings").style.backgroundColor = colour;
		document.getElementById("buttons").style.backgroundColor = colour;
	}
	
}

//handles all leader board value and adds them to the table
function getLeaderboard(names, times){
	
	var leaderboard = document.getElementById("leaderboardBody");
	
	var namesLength = names.length;
	
	names = names.substring(1, namesLength-1);
	
	var actualNames = names.split(", ");
	
	
	var namesLength = actualNames.length;
	
	for (i = 0; i < namesLength; i++) {
		var newRow = leaderboard.insertRow(i);
		var nameCell = newRow.insertCell(0);
		var timeCell = newRow.insertCell(1);
		nameCell.innerHTML = String(actualNames[i]);
		timeCell.innerHTML = String(times[i]);
		
		}
}



