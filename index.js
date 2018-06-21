var katzDeli =[];

function takeANumber(katzDeliLine,Name) {

   katzDeliLine.push(Name);
   var placeInLine = katzDeliLine.length;
   var message = `Welcome, ${Name}. You are number ${placeInLine} in line.`
   return message
}

function nowServing(LineArray) {

  if (LineArray.length === 0) {
    return "There is nobody waiting to be served!"}
    else {
    var beingServed = LineArray[0];
    var message = "Currently serving " + beingServed +".";
    LineArray.shift();
    return message;
    }
}

function currentLine(LineArray) {

  if (LineArray.length === 0) {
    return "The line is currently empty."
  }
  else {
    var listarray = [];
    for (let i=0; i<LineArray.length;i++) {
     var lineNo = i+1;
     var name = LineArray[i];

     listarray.push(`${lineNo}. ${name}`);


    }
    var message = listarray.join(', ');
    return `The line is currently: ${message}`;
  }
}
