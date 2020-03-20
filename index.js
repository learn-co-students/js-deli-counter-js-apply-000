//Take a number
  var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

//function came from example usage replaced "" with name
//${name} helps to know which name is being pulled
//katzDeliLine.length know the amount of tickets being pulled

//Now serving
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
