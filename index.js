var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
var nowServing = (katzDeliLine) => {
  if (katzDeliLine[0] === undefined ){
    return "There is nobody waiting to be served!";
  }
  else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}
var currentLine = (katzDeliLine) => {
  if (katzDeliLine[0] === undefined){
    return "The line is currently empty.";
  }
  else{
    var i = 0;
    var newLine = [];
    while (i < katzDeliLine.length){
      if (i > 0){
      newLine.push(` ${i + 1}. ${katzDeliLine[i]}`);
      i += 1;
      }
      else{
        newLine.push(`${i + 1}. ${katzDeliLine[i]}`);
        i += 1;
      }
    }
    return `The line is currently: ${newLine}`;
  }
}
