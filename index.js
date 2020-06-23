function takeANumber(line, name) {
  line.push(name);

   return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
      return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var inline = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
      for(var i = 0; i < katzDeliLine.length; i++ ){
        inline.push(`${i+1}. ${katzDeliLine[i]}`);
      }
      inline = inline.join( ", "+ "");
      return `The line is currently: ` + inline;
}
}