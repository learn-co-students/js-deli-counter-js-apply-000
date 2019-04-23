var katzdeliline = []

function takeANumber(katzdeliline, name){
    katzdeliline.push(name);
     var position = katzdeliline.length
    return(`Welcome, ${name}. You are number ${position} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return ("There is nobody waiting to be served!");
  }

    return (`Currently serving ${katzDeliLine.shift()}.`);

}

function currentLine(katzDeliLine){
    var waiting = []
  if (katzDeliLine.length === 0){
    return ("The line is currently empty.")
  }
  for (let i = 0;  i< katzDeliLine.length; i++) {
      waiting.push(`${i+1}. ${katzDeliLine[i]}`)
  }
    return (`The line is currently: ${waiting.join(', ')}`);
}
