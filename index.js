function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
      return "Welcome,"+" "+ name + '.'+ ' ' + "You are number" + " " + position + " "+"in line.";
    }

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!";
  } else{
      var serving = katzDeliLine.shift();
      return "Currently serving" + " " + serving + '.';
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else{

    var finalLine = 'The line is currently: ';
    var counter = 1;
      for(var i = 0; i < katzDeliLine.length; i++){
          finalLine += counter + "." + ' ' + katzDeliLine[i] +',' + ' ';
          counter++;
      }
    }
    return finalLine.slice(0, finalLine.length-2);
  }
