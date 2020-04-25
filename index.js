function takeANumber(line, name){
  line.push(name)
  var position = line.length
  return "Welcome, " + name + ". You are number " + position + " in line." 
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served"
  } else {
    var first = katzDeliLine[i];
    katzDeliLine.splice(0,1);
    return first
  }
}