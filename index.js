var katzDeli = []

function takeANumber(linenumber, linename)
{
  linenumber.push(linename);
  return `Welcome, ${linename}. You are number ${linenumber.indexOf(linename) + 1} in line.`;
}

function nowServing(linenumber)
{
  var linenext = linenumber.shift();
  return linenext ? `Currently serving ${linenext}.` : 'There is nobody waiting to be served!';
}

function currentLine(linenumber) {
  var lineString = 'The line is currently:';
  var initialLineString = lineString;
  linenumber.forEach(function(name, index)
  {
    lineString += ` ${index + 1}. ${name},`
  })
  return lineString === initialLineString ? 'The line is currently empty.' : lineString.slice(0, lineString.length - 1);
}
