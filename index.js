var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length>0) {
    var nowserving = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return "Currently serving " + nowserving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length>0) {
    var lineList=[];
    for (var line in katzDeliLine) {
      lineList.push(" "+(Number(line)+1)+". "+katzDeliLine[line]);
    }
    return "The line is currently:" + lineList;
  } else {
    return "The line is currently empty.";
  }

}