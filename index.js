var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];
function takeANumber(katzDeliLine, customer){
    katzDeliLine.push(customer);
    return "Welcome, " + customer + ". You are number " + katzDeliLine.length  + " in line."


}
const deliLine = ["Steven", "Blake", "Avi"];
function nowServing(deliLine){
  if (deliLine.length === 0) {
      return "There is nobody waiting to be served!";

  } else {
    for (var i = 0; i < deliLine.length; i++) {
        return "Currently serving " + deliLine.shift(deliLine[0]) + ".";

    }
  }

}




function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineUpdate = [];
    var counter = 1;
    for (var i = 0; i < katzDeliLine.length; i++) {
          lineUpdate.push(counter + ". " + katzDeliLine[i]);
         counter++;



    }

     return "The line is currently: " + lineUpdate.join(', ');
  }


}
