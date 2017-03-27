function currentLine(line) {
  if (!line.length) {
    //checks if line length = 0
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
    //adds people in line to array numbersAndNames
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
  //spits out the names and line positions of everyone in line
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
  //uses line.length to return the value of the position of the person in line
};



/*My original solution which approached it somewhat incorrectly

var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  var position1 = line.indexOf(name)
  var realposition = position1 + 1
  return ("Welcome, " + name + ". You are number " + realposition + " in line." )
}

function nowServing(linename) {
  if (linename.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var first = (linename[0])
    linename.shift()
  	return ("Currently serving " + first + ".")
  }
}

function currentLine(linename) {
  if (linename.length === 0) {
    return "The line is currently empty.";
  } else {
    var intro = "The line is currently: ";
    return (intro + "1. " + linename[0] + ", 2. " + linename[1] + ", 3. " + linename[2])
  }
}
*/
