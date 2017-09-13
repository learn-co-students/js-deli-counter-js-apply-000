var katzDeliLine = [];

function takeANumber(katzDeliline,name){
  katzDeliline.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliline.length + " in line.")
}

function nowServing(katzDeliLine){
  if (katzDeliLine == 0){
    return ("There is nobody waiting to be served!")
  } else {
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine == 0){
    return ( "The line is currently empty.")
  } else {

    var array = [];
    for (let i = 0; i < katzDeliLine.length; i++ ){
      array.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return ("The line is currently:" + array)
  }
}
