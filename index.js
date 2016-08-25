var welcome = "Welcome, "
var cline = "The line is currently:"
var sname = "Currently serving "
var copy = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  welcome += name + ". You are number "+katzDeliLine.length+" in line".
  return counter;
}

function nowServing(katzDeliLine){
if (katzDeliLine.length <= 0)
{
  return "There is nobody waiting to be served!";
}
else {

  sname += katzDeliLine.shift() + ".";
  counter--;
  return sname;
}
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length <= 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i =0; i<katzDeliLine.length; i++)
    {
      copy[i] = katzDeliLine[i];
    }
    for (var i =0; i<katzDeliLine.length; i++)
    {
      cline += " " + (i+1) + ". " + copy.shift();
      if(i<(katzDeliLine.length - 1))
      {
        cline += ",";
      }
    }

    return cline;
  }
}
