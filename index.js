var katzDeli = [];


function takeANumber(katzDeli, name){

  var currentLine = katzDeli.length

  katzDeli.push(name);

  var placeInLine = currentLine + 1;

  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeli){
  if(katzDeli.length > 0){

    var nextInLine = katzDeli.shift()

    return `Currently serving ${nextInLine}.`

  } else if (katzDeli.length === 0) {

    return "There is nobody waiting to be served!"

  }
}

function currentLine(katzDeli){
  if(katzDeli.length > 0){
    var numberLine = [];

    for (let i = 0; i < katzDeli.length; i++){
      var number = +i + +1;

      numberLine.push(" " + number + ". " + katzDeli[i]);
    }



    return `The line is currently:${numberLine}`


  } else if (katzDeli.length === 0){
    return "The line is currently empty."

  }

}
