var katzDeliLine = [];
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing (katzDeliLine) {
  var index = 0;
  var customer;
  if (katzDeliLine.length<1) {
  return `There is nobody waiting to be served!`;
  }
  else {
  for (index=0; index<katzDeliLine.length; index++) {
  customer = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return `Currently serving ${customer}.`;
  }
}
}
function currentLine (katzDeliLine) {
  var list=[];
  var index=0;
  if (katzDeliLine.length < 1) {
    return `The line is currently empty.`;
  }
  else {for (index=0; index<katzDeliLine.length; index++) {
  list[index] = `${index + 1}. ${katzDeliLine[index]}`;
  }
  return `The line is currently: ` + list.join(', ');
}
}