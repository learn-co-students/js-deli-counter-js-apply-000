function takeANumber(currentLine, newComerName) {

    currentLine.push(newComerName);

    var welcomeMessage = `Welcome, ${newComerName}. You are number ${currentLine.length} in line.`;

    return welcomeMessage;

}//end takeANumber



function nowServing(line) {
  
    var nobodyMessage = "There is nobody waiting to be served!";
    var person = line[0];
    var nowServingMessage = `Currently serving ${person}.`;

    if(line.length === 0) {
        return nobodyMessage;
    } else {
        line.shift();
        return nowServingMessage;
    }//control structure
    
}//end nowServing

function currentLine(line) {
    
    
    if(line.length == 0) {
        var emptyLine = "The line is currently empty.";
        return emptyLine;
    } else if(line.length == 1) {
        var onePerson = `The line is currently: 1. ${line[0]}`;
        return onePerson;
    } else if(line.length > 1) {
        
        var i = 0;
        var placeInLine;
        var finalMessage;
        var list = [];
        var lineMessage = "The line is currently: ";

        while (i < line.length) {
            
            placeInLine = `${(i + 1)}. `;
            
            list.push(placeInLine + line[i]);

            i++;

        }//while loop to build list of customers with their places in line
        
        finalMessage = lineMessage + list.join(", "); //build the final message by using the .join method

        return finalMessage;
        
    }//end if

}//end currentLine

