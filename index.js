// Code #1

var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)

}

// takeANumber(katzDeliLine, "Ada");
// takeANumber(katzDeliLine, "Kent");
// takeANumber(katzDeliLine, "Tom");
// takeANumber(katzDeliLine, "Grace");


// Code #2 -
//
var deliLine = []

function nowServing(deliLine) {
  deliLine.push()
var bbb = deliLine.shift()

if (deliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }

else {
  return `Currently serving ${bbb}.`
}
}



// Code #3

// function currentLine(line) {
//   var linePosition = line.length;
//
//   if(linePosition == 0) {
//     return "The line is currently empty."
//   }
//   else {
//     var customer = "";
//     for(var i = 0; i < line.length; i++){
//
//     customer += `${i + 1}. ${line[i]}, `;
//     }
//     }
//
//    return `The line is currently: ${customer}`
// }

// Code #3 Alternative

function currentLine(line) {
  var linePosition = line.length;

  if(linePosition == 0) {
    return "The line is currently empty."
  }
  else {
    var customer = "";
    for(var i = 0; i < line.length; i++){

    customer += `${i + 1}. ${line[i]}, `;
      // customer += customer.substring(0, customer.length - 1) ** not here
    }
    }

   return `The line is currently: ${customer.substring(0, customer.length - 2)}`
}
