function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". " + "You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
  }
  else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine) {
  // Bail out if empty array
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  // Ok, if I'm here I must need to loop through the katzDeliLine  
  let lineFormatting = "1. " + katzDeliLine[0];
  
  for(let i = 1; i<katzDeliLine.length; i++) {
    lineFormatting += ", " + (i+1) + ". " + katzDeliLine[i]
  }
  
  return "The line is currently: " + lineFormatting;
}




//     function currentLine(katzDeliLine) {
//  			if(katzDeliLine.length === 0) {
//    			return "The line is currently empty.";
//  			}	else {
//    				return "The line is currently: " + "1. " + katzDeliLine[0] + ", " + "2. " + katzDeliLine[1] + ", " + "3. " + katzDeliLine[2];
//  				}
//	    	}


//   function currentLine(katzDeliLine) {
//     var lineFormating = [];
//     if(katzDeliLine.length === 0) {
//       return "The line is currently empty.";
//    } else {
//      for(let i = 0; i<katzDeliLine.length; i++) {
//         lineFormating += ( i + 1) + ". " + katzDeliLine[i] + ", ";
//       }
//<<<<<<< HEAD
//      lineFormating = lineFormating.slice(0, lineFormating.length-2);
//=======
//       lineFormating.slice(0, lineFormating.length-2);
//>>>>>>> 7e457f8f0f4ae5e335f4ba79b7a3d673e98d6896
//       return "The line is currently: " + lineFormating;
//     }
//    }

