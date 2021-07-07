// var katzDeliLine = [];

function takeANumber(line, name) {
 var array =[];
 line.push(name);
 array.push('Welcome, ' + name + '. You are number ' + line.length +  ' in line.');
 return array;
}

function nowServing(array) {

    if (array.length > 0) {
    return "Currently serving " + array.shift() + "."
      }
    else {
      return "There is nobody waiting to be served!"
}
}

function currentLine(array) {
  var lineArray = []
  if (array.length > 0) {
    for (let i=0, l = array.length; i < l; i++) {
   lineArray.push(`${i + 1}. ${array[i]}`) 
    }}
    else {
      return "The line is currently empty."
    }
  return `The line is currently: ${lineArray.join(", ")}`
  }