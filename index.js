
function takeANumber(people_in_line, new_person_name) {
  
  people_in_line.push(new_person_name);
  
  var x = people_in_line.lastIndexOf(new_person_name);
  var y = x + 1;
  return("Welcome, " + new_person_name + "." + " You are number " + y + " in line.");
  
}

function nowServing(katzDeliLine) {
  // the variable x works on line 18 because shift has an automatic return of what it cut out.
  var x = katzDeliLine.shift();
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + x + ".";
  }
}


// return the first person in line
  // array[0] is first person in line 
  
// remove that person from the line
  // pop[0] to remove first person
  
// if there is no one else, say "There is nobody weaiting to be served"
  // if statement nobody, make nobody statement, else ""


function currentLine(katzDeliLine) {
  
  var count = [1, " " + 2, " " + 3, " " + 4, " " + 5];
  var j = [];
  


  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      j.push(count[i]+ ". " + katzDeliLine[i]);
    }return "The line is currently: " + j.toString();
  }  


  
}
