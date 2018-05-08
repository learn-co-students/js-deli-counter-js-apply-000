var katzDeli = [];

function takeANumber(line,name) {
  /* This function adds the given name to the given deli line. */
		  line.push(name);  // Add the given name to the next available index in the deli line array.
		  var positionInLine = "Welcome, " + name + ". You are number " + (line.indexOf(name) + 1) + " in line.";
      /* Create the string that confirms the position in line. */
      return positionInLine;
		}

function nowServing(line) {
    			var currentServe = "There is nobody waiting to be served!"
    				// Creates the default message if there is nobody waiting.
    			if (line.length > 0) {
    				currentServe = "Currently serving " + line[0] + ".";
    			} // checks if anyone is waiting on line, and if so, returns who is first in line
    			line.shift();
          // removes the first person from the line
          return currentServe;
    		}

function currentLine(line) {
        	var lineStatus = "The line is currently empty."
        		      // Creates the default message if the line is empty.
        	if (line.length > 0) {  // checks if anyone is on line
        	   lineStatus = "The line is currently: "
        	    var i; // creates loop counter
        			for (i = 0; i < line.length; i++) { // loops until everyone is on the list
        					lineStatus = lineStatus + (i+1) + ". " + line[i] + ", "
        			}
        			lineStatus = lineStatus.replace(/,\s*$/, ""); // removes any comma at the end
        		  }
        			return lineStatus;
        	}
