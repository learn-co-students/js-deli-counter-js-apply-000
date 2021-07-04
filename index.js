
//katzDeliLine = katzDeli implicitly / newName = new person who takes a number implicitly
function takeANumber(katzDeliLine, newName){

  katzDeliLine.push(newName)

  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`


}

function nowServing(deliLine){

  if (deliLine.length == 0){

    return "There is nobody waiting to be served!";

  }

  else {

    var first = deliLine.shift();
    return `Currently serving ${first}.`

  }

}

function currentLine(line){

  if (line.length == 0) {

  return "The line is currently empty.";

} else {

  var lineString = ''

  function lineReturn(element, index){
    lineString += `${index + 1}. ${element}`;
    if (index + 1 < line.length ){
       lineString += ', ';

    }
  }

  line.forEach(lineReturn)

  return 'The line is currently: ' + lineString ;
}

}
