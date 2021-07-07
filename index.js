// DELI COUNTER LAB SOLUTION
//    REID WATSON


// Take A Number function: generates welcome message and returns person's position in line

function takeANumber (line, name){
  //add name to line
  line.push(name);
  
  //create variable for number position of each name
  var position = line.indexOf(name) + 1;
  
  //generate welcome message including each customer's name and position in line
  var welcomeMsg = "Welcome, " + name + ". " + "You are number " + position + " in line." ;
  
  return welcomeMsg;
}


//Now Serving function: returns first person in line and removes them from the line list 
function nowServing (line){
  
  //define variables
  var noLine = "There is nobody waiting to be served!";
  var nextUp = "Currently serving " + line[0] + ".";
 
  //empty line message
  if (line.length === 0){
    return noLine;
  }
  
  //remove served customer from line
  else {
    line.shift();
  }
  return nextUp;
}


//Current Line function: returns current line as a string displaying a numbered line order 
function currentLine (line){
  
  //define variables
  var i = 0;
  var lineMsg = "The line is currently: ";
  var empty = "The line is currently empty.";
  
  //empty line message
  if (line.length === 0){
    return empty;
  }
  
  else {
    for (i = 0; i < line.length; i++){
      
      //conditional statement for proper comma placement,
      //all items except last receive comma added to the end of the string 
      if (i < line.length - 1){
        lineMsg += line.indexOf(line[i]) + 1 + ". " + line[i] + ", ";
      }
      else {
        lineMsg += line.indexOf(line[i]) + 1 + ". " + line[i];
    }
   }
  }
  
  return lineMsg;
}
