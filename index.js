var katzDeliLine = []
var katzDeli=[]

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push (name);

  var linenumber = katzDeliLine.length

  return (`Welcome, ${name}. You are number ${linenumber} in line.`)

}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length > 0) {

    return `Currently serving ${katzDeliLine.shift()}.`
  }
     else {

       return 'There is nobody waiting to be served!';
   }
}


function currentLine(katzDeliLine) {
 var order = [];

 if (katzDeliLine.length > 0) {

   for (var i = 0; i < katzDeliLine.length; i++) {

    var customer = katzDeliLine[i];
    order.push ((i+1) + ". " + customer);

  } return "The line is currently: " + order.join(', ');

} else {

    return "The line is currently empty.";
  }
}
