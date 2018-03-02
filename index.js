function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine) {
  let person = katzDeliLine.shift();
  return person ? `Currently serving ${person}.` : "There is nobody waiting to be served!";
}
function currentLine(katzDeliLine){
  function myFunc() {
    let str = `The line is currently: 1. ${katzDeliLine[0]}`;
    for(let i=1;i<katzDeliLine.length;i++) {
      str += `, ${i+1}. ${katzDeliLine[i]}`;
    }
    return str;
  }
  return !katzDeliLine.length ? "The line is currently empty." : myFunc();
}
