//Task 1
// "Welcome, Ada. You are number 1 in line."

function takeANumber(array, name) {
  array.push(name);
  return("Welcome, " + name + ". You are number " + array.length + " in line.");
}


//Task 2

function nowServing(array) {
  if (array.length > 0) {
  return ("Currently serving " + array.shift() + ".");
}
else {
  return "There is nobody waiting to be served!";
}
}

//Task 3
function currentLine(array) {
  if (array.length > 0) 
  {
    var i;
    let posName = [];
   for (let i = 0; i < array.length; i++) 
       {posName.push((i + 1) + ". " + array[i])}
       //Above loop gives array posName its values
        return ("The line is currently: " + posName.join(', '));
       }
       
  else
  {return "The line is currently empty.";
  }
}