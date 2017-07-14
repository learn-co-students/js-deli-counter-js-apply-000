

function takeANumber (katzDeliLine, nextPerson){
 katzDeliLine.push(nextPerson)
 return `Welcome, ${nextPerson}. You are number ${katzDeliLine.length} in line.`
}

var katzDeli = [];

function nowServing(katzDeli){


  if ( katzDeli.length === 0 ){
  return "There is nobody waiting to be served!";
  }
  else {
    var person = katzDeli.shift();
    return `Currently serving ${person}.`
  }
}

function currentLine(katzDeliLine){ //katzDeliLine = ["Ada", "Grace"]
  if (katzDeliLine.length === 0){
  return "The line is currently empty.";
 }
   else{
    var line = "The line is currently: "
    var list = []
    for ( var i = 0; i < katzDeliLine.length; i++){
        list.push(`${i+1}. ${katzDeliLine[i]}`) //1. Ada, 2. Grace


    }


    return line += list.join(", ")
}

}
