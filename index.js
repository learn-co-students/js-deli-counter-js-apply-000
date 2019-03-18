
function takeANumber(queue,name){
  var i = queue.length + 1;
  var text = "Welcome, "+ name + "." +" You are number "+ i + " in line.";
  queue.push(name);
  console.log("First test",text);
  return text;
}

function nowServing(katzDeliLine){
  var i =0;
  var text;
  var x = katzDeliLine[i];
  if (x === undefined){text = "There is nobody waiting to be served!";
  }
  else {text = "Currently serving " + katzDeliLine[i] + ".";
  }
  katzDeliLine.shift(1);
  console.log("Second Test Results =",text);
  return text;
}

function currentLine(katzDeliLine){
  console.log(katzDeliLine);
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  
      for (var i=0; i < katzDeliLine.length; i++){
        var textname;
        var q = i+1; //because the first person is at position 1 not 0 in the array
                    if(q === 1){textname = "1. " + katzDeliLine[i];}
                    else {textname = " " + q + ". " + katzDeliLine[i];}
                    console.log("Array and String",katzDeliLine[i],textname);
              katzDeliLine[i] = textname;
          }
var finaltext = "The line is currently: " + katzDeliLine;

console.log("Final Result =",finaltext);

return finaltext;
}