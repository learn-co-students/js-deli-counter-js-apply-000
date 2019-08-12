function takeANumber(currentLine, newPerson){
   		var lineNumber = currentLine.length + 1
    		var welcomeMessage = "Welcome, " + newPerson + ". You are number " + lineNumber + " in line.";
    		currentLine[currentLine.length] = newPerson;
   		 return welcomeMessage;
}

function nowServing(katzDeliLine){
  		if (katzDeliLine.length === 0){
        		return "There is nobody waiting to be served!";
    		} else {
      			return "Currently serving " + katzDeliLine.shift() + ".";
   		 }
}

function currentLine(katzDeliLine){
  		if (katzDeliLine.length === 0) {
     			return "The line is currently empty.";
  		} else {
      			var text = "The line is currently: ";
      			var name =  "";
      			for (var i = 0; i < katzDeliLine.length; i++ ){
          				if (i < katzDeliLine.length - 1){
          					name = name + (i +1) + ". " + katzDeliLine[i] + ", ";
          				}
      			} 
    		 var lastName = (katzDeliLine.length) + ". " + katzDeliLine[katzDeliLine.length - 1]
     		return text + name + lastName;
   		 }
}
