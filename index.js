
function takeANumber(katzDeliLine, name)  {
  var result = "Welcome, "+ name + ". You are number " + parseInt(katzDeliLine.length+1) + " in line."

  katzDeliLine.push(name);

  return result;
}

function nowServing(katzDeliLine) {
  var result;

  if(katzDeliLine[0])  {
    result = katzDeliLine[0];

    katzDeliLine.shift();
    return "Currently serving " + result + ".";
  }

  else {
    result = "There is nobody waiting to be served!";
    return result;
  }
}

function currentLine(katzDeliLine)  {
  var result= "";

  if(katzDeliLine[0])  {
    result = "The line is currently: ";

    for(var i=0; i < katzDeliLine.length-1; i++)  {
      result = result +(i+1)+ ". " + katzDeliLine[i] + ", ";
    }

    result = result +(i+1)+ ". " + katzDeliLine[katzDeliLine.length - 1];

    return result
  }

  else {
    result = "The line is currently empty.";
    return result;
  }
}