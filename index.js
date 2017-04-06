var katzDeliLine = [];

function takeANumber(katzDeliLine, personName){
    //Get the current position of personName
    var position = katzDeliLine.indexOf(personName);
    
    //If not found...
    if(position == -1){
        //include this personName in katzDeliLine
        katzDeliLine.push(personName);
        
        //Get the new position in array
        position = katzDeliLine.indexOf(personName);
        
        //Add 1 to the position in array to get the real position in line
        position++;
    }
    
    //Returning the customized message
    return "Welcome, " + personName + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine){
    var firstPerson;
    //If there is nobody in line...
    if(katzDeliLine.length == 0){
        //Returning the message
        return "There is nobody waiting to be served!";
    }
    else{
        //Get the first person in the line
        firstPerson = katzDeliLine[0];
        //Remove the first person from the line
        katzDeliLine.splice(0,1);

        //Returning the customized message
        return "Currently serving " + firstPerson + ".";
    }
}

function currentLine(katzDeliLine){

    var line = "The line is currently: ";
    var i;
    var size = katzDeliLine.length;
    //If there is nobody in line...
    if(size == 0){
        //Returning the message
        return "The line is currently empty.";
    }else{
        //Iteratin at the line
        for(i = 0; i < size; i++){
            //Get the real position
            var position = i + 1;
            //Adding the personName in the line description
            line += position + ". " + katzDeliLine[i];

            //While it isn't the last element of the array put the comma in the end 
            if(position != size){
                line += ", "; 
            }
        }
    }
    return line;
}
