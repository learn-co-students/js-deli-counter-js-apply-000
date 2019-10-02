var lineCounter = 0;  //Counts customer position in line

//Assigns number to customer in line
function takeANumber(currentLine, name) {
  let status = "";   //message to be returned
  
  if (currentLine.length <= 0) { //Only one person in line
      currentLine.push(name);  //Person currently in line
      status += "Welcome, " + currentLine[lineCounter] + ". You are number " + (lineCounter + 1) + " in line."; 
      lineCounter++; 
         
   } else { //Append to existing line
           currentLine.push(name); //Add new person to line
           lineCounter = currentLine.length;
           status += "Welcome, " + name + ". You are number " + lineCounter + " in line.";
          }

  return status;  //Status of the line

}//END takeANumber()


function nowServing(currentLine) {
	let status = "";		//Status of the line
	if (currentLine.length === 0) { //Nobody's in line
	    status = "There is nobody waiting to be served!";
	    return status;
  }else {
  	     status = "Currently serving " + currentLine[0] + ".";//Announce 1st in line
	       currentLine.shift();		//remove 1st in line 
	 return status;
  }

}//END NowServing()



function currentLine(currentLine) {
	let status = "";	//Status of the current line
	let inLine = "";  //Whoever is in line
	
	if (currentLine.length === 0) {
	    status = "The line is currently empty.";
	    return status;
  } else {
	        let i = 0;
	        while (i < currentLine.length) { // Go through line & list persons
	    	         inLine += (i+1) + ". " + currentLine[i] + ", ";
	               i++;
	   }
	   
	   status += "The line is currently: " + inLine.substring(0, inLine.length - 2);
	   return status;
  }

}//END currenLine()