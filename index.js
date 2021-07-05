
function takeANumber (katzDeliLine, next){
  katzDeliLine.push(next);
  return `Welcome, ${next}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    //shifts array to the left 1 space, removing first space
    var next = katzDeliLine.shift();

    return `Currently serving ${next}.`;
  }
}

function currentLine (katzDeliLine){

  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    var sentence = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++){
      //sentence += (i+1) + ". " + katzDeliLine[i];
      sentence += `${i+1}. ${katzDeliLine[i]}`;
      if (katzDeliLine.length - i > 1){sentence+= ", ";}
    }
    return sentence
  }
}