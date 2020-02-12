function takeANumber(katzDeliLine, name) {
katzDeliLine.push(`${name}`);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length > 0) {
return `Currently serving ${katzDeliLine.shift()}.`; }
else {
return 'There is nobody waiting to be served!';
}}

function currentLine(katzDeliLine) {
    let line = []
    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    } else {
      for(let i = 0; i < katzDeliLine.length; i++) {
        line += (i + 1) + ". " + katzDeliLine[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}