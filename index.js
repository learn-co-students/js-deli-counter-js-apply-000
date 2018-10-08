//we need let customers take a number when they enter our store! Woo! So let's build a great function for them below!

// var katzDeliLine = []; 

//this function welcomes the new customer and tells them their place in line 
function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  
  return (`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
}

//this function takes the current line of people, returns the first person in line then removes them
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  else {
    return ('There is nobody waiting to be served!');
  }
}

//this function accepts the current line of people and returns the current line as a string (Make this a for loop!!)

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
      return("The line is currently empty.");
  }
  var localCurrentLine = [];
  for (var i = 1; i <= katzDeliLine.length; i++){
      localCurrentLine.push(` ${i}. ${katzDeliLine[i-1]}`);
  }
  return (`The line is currently:${localCurrentLine}`);
}