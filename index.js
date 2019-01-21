
function takeANumber(arr, name) {
  arr.push(name);
  return 'Welcome, '+ name +'. You are number ' + arr.length + ' in line.'
}

function nowServing(arr) {
  if(arr.length > 0) {
    return `Currently serving ${arr.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(arr) {
  if(arr.length > 0){
  var line = 'The line is currently: ';
  arr.forEach(function (pos) {
    line += arr.indexOf(pos) + 1 +'. ' + pos +', ';
  });
  return line.slice(0,line.length - 2);
  } else {
    return 'The line is currently empty.'
  }
}