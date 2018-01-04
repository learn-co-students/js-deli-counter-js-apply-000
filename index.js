var katzDeli = [];

function takeANumber(array, person) {
  array.push(person)
  var n = array.length
  return `Welcome, ${person}. You are number ${n} in line.`
}

function nowServing(array) {
  if(array[0] === undefined) {
    return  "There is nobody waiting to be served!"
  } else {
    var currently = array.shift();
  }
  return `Currently serving ${currently}.`
}


function currentLine(line) {
  var str = ''
  if(line[0] === undefined) {
    str = "The line is currently empty."
  } else {
    str = "The line is currently: "
    for(var i = 0; i < line.length; i++) {
      if(i !== line.length -1) {
        str+= `${i+1}. ${line[i]}, `;
      } else {
        str+= `${i+1}. ${line[i]}`;
      }
    }
  }
  return str
}
