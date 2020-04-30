var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(deli, name) {
  deli.push(name);
  var place = deli.indexOf(name);
  return(`Welcome, ${name}. You are number ${place+1} in line.`)
}


function nowServing(deli) {
  if (deli.length > 0) {
    var firstPerson = deli.shift();
    return `Currently serving ${firstPerson}.`;
    } else {
      return "There is nobody waiting to be served!";
    }
}

var deliAsString = []
function currentLine(deli) {
  if (deli.length === 0) {
    return "The line is currently empty."
  } else {
    deli.forEach(function(element) {
      deliAsString.push(`${deli.indexOf(element)+1}. ${element}`)
})
    return `The line is currently: ${deliAsString.join(', ')}`
  }
}