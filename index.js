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
var people = []

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
// katzDeliLine = 0 means the amount of people should not go over 0
// line should be empty

  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
      people.push(`${i + 1}. ${katzDeliLine[i]}`)
    }

  return `The line is currently: ${people.join(', ')}`
  };
// var = people is the people in line taht need to be listed
// i (itemize) is to make sure the line of people will have the number where they are in line
//katzDeliLine will acknowldege the name of who is in the line
//returning the line of peolple with a comma inbetween each one.
