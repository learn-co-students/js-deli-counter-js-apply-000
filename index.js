function takeANumber(inline, name){
  var linespot = inline.length+1;
  inline.push(name);
  return 'Welcome, ' + name + '. You are number ' + linespot +  ' in line.';
}

function nowServing(katzDeliLine){
  var firstperson = katzDeliLine.shift();
  if (firstperson===undefined) {
      return 'There is nobody waiting to be served!';
}
  return ('Currently serving ' + firstperson + '.');
}

function currentLine(theLine){
  var line = [];
  if(theLine.length===0){
    return "The line is currently empty."
  } 
  else{ 
     var count = 0
     while (count < theLine.length) {
      line.push(` ${count+1}. ${theLine[count]}`)  
      count++
    }
    return (`The line is currently:${line.join()}`)
  }
  
}