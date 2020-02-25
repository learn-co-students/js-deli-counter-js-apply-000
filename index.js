var katzDeliLine = [];

function takeANumber(arr, name) {
  arr.push(name);
  var num = arr.length;
  return 'Welcome, ' + name + '. You are number ' + num + ' in line.'
}

function nowServing(arr) {
  if (arr.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var name = arr[0];
    arr.shift(0);
   return 'Currently serving ' + name + '.';
 }
}

function currentLine(arr) {
  if (arr.length === 0) {
    return 'The line is currently empty.'
  } 
  
  var str = 'The line is currently:';
  
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i];
    var num = i + 1;
    
    if (i === arr.length - 1) {
      var pair = ' ' + num + '. ' + name;
      str += pair
    } else {
      var newPair = ' ' + num + '. ' + name + ',';
      str += newPair;
    }
  }
  
  return str;  
}
