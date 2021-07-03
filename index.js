function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length==0){
    return `There is nobody waiting to be served!`;
  } else {
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine==0){
    return `The line is currently empty.`;
  } else {
    var str= "The line is currently: ";
    for (var i=0;i<katzDeliLine.length-1; i++) {
      str = str + `${(i+1)}. ${katzDeliLine[i]}, `
    }
    str = str + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
    return str;
  }

}
