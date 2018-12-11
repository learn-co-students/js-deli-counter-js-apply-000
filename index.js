function takeANumber (people, newName){
  people.push(newName);
  return "Welcome, " + newName + ". You are number " + people.length + " in line.";
}
function nowServing (people){
  if (people.length === 0){
    return "There is nobody waiting to be served!";
  }
  var person = people[0];
  people.shift();

  return "Currently serving " + person + ".";
}
function currentLine(people){
  if (people.length === 0){
    return "The line is currently empty.";
  }
  var str = "The line is currently: ";
  for (var i = 0; i < people.length; i++){
    str += (i+1) + ". " + people[i];
    if (i !== people.length - 1){
      str += ", ";
    }
   
  }
  return str;
}
