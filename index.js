var katzDeli = [];
function takeANumber(katzDeli, personName) {
  katzDeli.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeli.length} in line.`
}

function nowServing(theLine) {
  if (theLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
     var who = theLine[0];
     theLine.splice(0, 1);
     return `Currently serving ${who}.`;
  }
}

function currentLine(theLine) {
  if (theLine.length < 1) {
    return "The line is currently empty."
  } else {
    var people = '';
    for ( var i = 0; i < theLine.length; i++) {
      people = `${people} ${i+1}. ${theLine[i]},`
    }
    people = people.substring(0, people.length - 1);
    return `The line is currently:${people}`
  }
}
