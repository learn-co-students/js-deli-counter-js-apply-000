var katzDeli = [];

function takeANumber(line, name) {
  var placeInLine = line.length + 1; //makes actual no. in line instead of the array number
  var output = "Welcome, " + name + ". You are number " + placeInLine +" in line."; //creates the output text
  line.push(name);
  return output;
}

function nowServing(currentLine) {
  var output;
  if(currentLine.length === 0) { //checks to see if line is empty
    output = "There is nobody waiting to be served!"
  }
  else {
    output = "Currently serving " + currentLine[0] + ".";
    currentLine.shift(); //sees whose currently being served and removes the first name from the array
  }
  return output;
}

function currentLine(katzDeliLine) {
  var output;
  if(katzDeliLine.length === 0) {
    output = "The line is currently empty." //checks if line is empty
  }
  else {
    output = "The line is currently: "
    for(var i = 0; i < katzDeliLine.length; i++) {
      if(i === 0){ //outputs the place in line as commer would come first
        output = output + (i + 1) + ". " + katzDeliLine[i];
      }
      else{
        output = output + ", " + (i + 1) + ". " + katzDeliLine[i]; //outputs the people in the line and position
        //if moved commer to end in this line, commer after Ann would not appear
      }
    }
  }
  return output;
}
