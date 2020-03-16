var katzDeliLine = [];

function takeANumber(arr, name){
  arr.push(name);
  return ('Welcome, ' + name + '. You are number ' + arr.length + ' in line.');
}

function currentLine(arr){
  var line = 'The line is currently: ';
  if (arr.length > 0){
    for (var i = 0; i < arr.length; i++){
      if (i != (arr.length-1)){
        line += ((i+1) + '. ' + arr[i] + ', ');
      } else if (i == (arr.length-1)){
        line += ((i+1) + '. ' + arr[i]);
      }
    }
  } else{
    line = 'The line is currently empty.'
  }
  return line;
}

function nowServing(arr){
  if (arr.length > 0 ){
  return ('Currently serving ' + arr.shift() + '.');
  } else{
    return ('There is nobody waiting to be served!');
  }
}