function takeANumber(people, name){
  people.push(`${name}`);
  return(`Welcome, ${name}. You are number ${people.length} in line.`);
}

function nowServing(katzDeliLine){
  let i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!";

  }
  else {
    return (`Currently serving ${katzDeliLine.shift()}.`)
  }

}
var WaitingInLine = [];
function currentLine(katzDeliLine){
  let i = 0;
  while (i < katzDeliLine.length) {
    WaitingInLine.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0)
  {
    return "The line is currently empty.";
  }
  else {
  return(`The line is currently:` + WaitingInLine);
}
}
