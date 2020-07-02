//1. katzDeliLine



var katzDeliLine = []


function takeANumber(katzDeliLine, name) {
    var lineNumber = katzDeliLine.length
    katzDeliLine.push(name)
    lineNumber++


    return `Welcome, ${name}. You are number ${lineNumber} in line.`

};


//2.nowServing

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return `There is nobody waiting to be served!`
  }


};



//3. currentLine

function currentLine(katzDeliLine) {
  var currentLine = 0
  if (katzDeliLine.length > 0) {
    for (var i = 0; i<=katzDeliLine.length; i++) {
      currentLine++
      return `The line is currently: ${currentLine}. ${katzDeliLine[i]},`
  } else {
    return `The line is currently empty.`

    }

  }
};
