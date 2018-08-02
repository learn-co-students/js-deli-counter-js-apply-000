function takeANumber(katzDeliLine, name) {
    return "Welcome, " + name + "." + " You are number " + katzDeliLine.push(name) + " in line.";
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!";
} else { 
  let nextUp = katzDeliLine.shift();
  return "Currently serving " + nextUp + ".";
   }
}

 function currentLine(deliLine) {
        if (deliLine.length === 0){
          return "The line is currently empty.";
        } else {
        var update = "The line is currently: ";
        deliLine.forEach(function(item, index){
        update += index+1 +"." + " " + item + "," + " "});
        } let newUpdate = update.slice(0,47);
        return newUpdate;
  }

 