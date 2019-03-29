


function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}



function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}



function currentLine(katzDeliLine) {
  var emptyArray = []
  var string = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    var output = `${i + 1}. ${katzDeliLine[i]}`
    emptyArray.push(output)
  }
  var people = emptyArray.join(", ")
  return string += people
}
 // dont put a for loop in an else block
