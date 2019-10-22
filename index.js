function takeANumber (currentLine, name)
{
  var current = currentLine.length + 1;
  currentLine.push(name);
  return `Welcome, ${name}. You are number ` + current + ` in line.`;
}


function nowServing(katzDeliLine)
{
  if (katzDeliLine.length < 1){
  return "There is nobody waiting to be served!";}
  
  else {
  return 'Currently serving ' + katzDeliLine.shift() + '.';}
}


function currentLine(line)
{
  if (line.length < 1){
  return 'The line is currently empty.';}
  
  else {
    var result = 'The line is currently: ';
    for (var i = 1; i <= line.length; i++){ 
      result = result + i + ". " + line[i-1] + ", "; }
      var sectumsempra = result.slice(0, result.length-2);
    return sectumsempra;
  }
}


