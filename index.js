var KatzDeliLine = []

function takeANumber(KatzDeliLine,customerName){
  let i=0
  while (i<KatzDeliLine.length){
    i++};
  KatzDeliLine.push(`${customerName}`);
  return (`Welcome, ${customerName}. You are number ${KatzDeliLine.length} in line.`);
}


function nowServing(KatzDeliLine){
  let i = 0
  while (i < KatzDeliLine.length) {
    i++};
  if (KatzDeliLine.length === 0)
  return ("There is nobody waiting to be served!")
  else
  return (`Currently serving ${KatzDeliLine.shift()}.`)
}

function currentLine(KatzDeliLine){
  var line = []
  for (let i = 0; i < KatzDeliLine.length; i++){
    line.push(`${[i + 1]}. ${KatzDeliLine[i]}`)}
  if (KatzDeliLine.length === 0)
    return ("The line is currently empty.")
  
  return ('The line is currently: ' + line);
}