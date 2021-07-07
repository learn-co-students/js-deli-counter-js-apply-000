var katzDeliLine = [];
//this var is declared globally and can be used in any function


/*this function is called with 2 parameters . ex. takeANumber(katzDeliLine, "Christy") . katzDeliLine=the current line of people,
"christy"= the new name to be added to the array */

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."  //concatenation
}
// the push function adds a person to the END of the array







function nowServing(katzDeliLine){
/*  var i = 0;
  while(i<=katzDeliLine.length){
    i++;
  }*/

  //another way to write this would be using a for loop
  for(let i = 0; i<=katzDeliLine.length; i++){

  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving " + katzDeliLine.shift() + "." ;
  }
//the shift function removes elements at the beginning of an array
}
}






var line = [];
//global variable in case we need to use this variable in outside functions in the future
function currentLine(katzDeliLine){

/*var i =0;
while(i<katzDeliLine.length){
  line.push(` `+[i+1]+`. `  + katzDeliLine[i]);
  i++;
} */

//refactoring; another way to write this is using a for loop
for(let i=0; i<katzDeliLine.length; i++){  //this loop will go through all the people in the katzDeliLine and add them to a new array "line" and tell us their place in line with a number
  line.push(` `+[i+1]+`. `  + katzDeliLine[i]); //[i+1] adds one each time through the loop so that each person in line is assigned a new number
}

//this condition checks to see if there is anybody in the katzDeliLine, if so, they will be returned as a string that was created pushing each customer to the new array "line"
if(katzDeliLine.length===0){
  return "The line is currently empty.";
}else{
  return "The line is currently:"  + line;
}
  }
