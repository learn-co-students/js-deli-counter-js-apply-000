


var katzDeli = []
function takeANumber(Deli, name){
  katzDeli = Deli;
  katzDeli.push(name);
  return ('Welcome, ' + name + '. You are number ' + (katzDeli.indexOf(name)+1) + ' in line.')
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeli.shift() + '.';
  }
}

function currentLine(line){
  var result = 'The line is currently: ';
  var index = 1
  if (line.length === 0){
    return 'The line is currently empty.';
  } else {
    for(var i = 0; i = line.length; i++){
      result += (index) + '. ' + line.shift() + ', ';
      index++
  }
  }
  return result.slice(0, [result.length - 2])
}
