var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {

  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + Number(katzDeliLine.indexOf(name)+1) + " in line."
}

function nowServing (katzDeliLine) {
  var finalServe = "";

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    finalServe += "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.splice(0,1);
  }
  return finalServe;
}

function currentLine (katzDeliLine) {
  var finalLine = "The line is currently: ";

   if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    } else {
      for (var i = 0; i < katzDeliLine.length; i++) {
        if (i !== katzDeliLine.length-1) {
          finalLine += Number(i+1) + ". " + katzDeliLine[i] + ", ";
        } else if (i===katzDeliLine.length-1) {
          finalLine += Number(i+1) + ". " + katzDeliLine[i];
        }
      }
    }
  return finalLine;

}
