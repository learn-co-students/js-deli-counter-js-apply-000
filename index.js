var line = [];
function takeANumber(line, name) {
  line.push(name)//adds & appnds & handles
 return "Welcome, " + name + ". You are number " + line.length + " in line."//rtrns
}
function nowServing (line){
  var newline = new Array ();//creating array to store the person who is beong served
  var i = 0;// index
  if (line.length === 0) { //checking
      return "There is nobody waiting to be served!"// no one
  } else if (line.length > 0) {
        newline = line.shift(i)// literally guessed. assigned a new value since previous return methid didn't work for me
        return "Currently serving "  + newline + "."; //mssg person
      }
  }
  //var line = ['Robert','Sarah','Mike'];
  var line = [];
function takeANumber(line, name) {
  line.push(name)//adds & appnds & handles
 return "Welcome, " + name + ". You are number " + line.length + " in line."//rtrns
}
function nowServing (line){
  var newline = new Array ();//creating array to store the person who is beong served
  var i = 0;// index
  if (line.length === 0) { //checking
      return "There is nobody waiting to be served!"// no one
  } else if (line.length > 0) {
        newline = line.shift(i)// literally guessed. assigned a new value since previous return methid didn't work for me
        return "Currently serving "  + newline + "."; //mssg person
      }
  }
  //var line = ['Robert','Sarah','Mike'];
  function currentLine(line){
  var i = 0;
  var updatedline = [] //new array
  if (line.length === 0){
    return "The line is currently empty." } else if (line.length > 0){
      for (var i = 0; i < line.length; i++) {
          updatedline += `${i+1}. ${line[i]}, `;// value refference
      }
      updatedline = updatedline.slice(0, updatedline.length - 2)
      return "The line is currently: " + updatedline
      console.log(line);}}

currentLine(line);
