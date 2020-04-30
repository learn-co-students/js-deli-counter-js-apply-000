function takeANumber(line, name)
{
  var place = line.length+ 1;
  line.push(name);
  return "Welcome, " + name + ". You are number " + place + " in line.";
}

function nowServing(katzDeliLine){
if (!katzDeliLine.length)  
return "There is nobody waiting to be served!"
else
{
   return (`Currently serving ${katzDeliLine.shift()}.`);
}
}

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNames = [];
  
  for(var n=0; n<line.length; n++) {
    lineNames.push(n+1 + ". "+ line[n]);
  }
  console.log("The line is currently: " + lineNames)
  return "The line is currently: " + lineNames.join(', ');
}