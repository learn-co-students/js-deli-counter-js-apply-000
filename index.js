var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return (`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  var result;

  if(katzDeliLine.length == 0)
    result = "There is nobody waiting to be served!"
  else
    result = "Currently serving " + katzDeliLine.shift() + '.';

  return result;
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length == 0)
    return "The line is currently empty."

  var result = "The line is currently:"

  for (var i=0; i<katzDeliLine.length; ++i)
    result += i == 0 ? ` ${i+1}. ${katzDeliLine[i]}` : `, ${i+1}. ${katzDeliLine[i]}`;

  return result;
}
