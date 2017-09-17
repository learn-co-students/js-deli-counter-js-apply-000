var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
   var position = katzDeliLine.length + 1;
   katzDeliLine.push(name);

   return (`Welcome, ${name}. You are number ${position} in line.`)

}

function nowServing(katzDeliLine){

  if(katzDeliLine.length === 0){
    return (`There is nobody waiting to be served!`);
  } else{
    var serving = katzDeliLine.shift();
    return (`Currently serving ${serving}.`);

  }
}

function currentLine(katzDeliLine){

  if(katzDeliLine.length === 0){
    return ('The line is currently empty.');
  } else {
    var string = 'The line is currently: ';
    for (var i = 0; i < katzDeliLine.length; i++){
      string+=`${i+1}. ${katzDeliLine[i]}`;
      if(i < katzDeliLine.length-1){
        string+= `, `
      }

    }
  }

  return string;
}
