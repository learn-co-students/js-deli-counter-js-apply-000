function takeANumber (arr, name) {
  if (arr.length === 0) {
    arr.push(name);
    return `Welcome, ${name}. You are number 1 in line.`;
  }
    arr.splice(arr.length, 0, name);
    var linePosition = arr.indexOf(name) +1;
    return `Welcome, ${name}. You are number ${linePosition} in line.`;
}

function nowServing (arr) {
  if (arr.length === 0){
    return "There is nobody waiting to be served!"
  }
   var removed= arr.splice(0,1);
   return `Currently serving ${removed}.`
}

function currentLine (arr) {
  var newArr = [];
  if (arr.length === 0) {
    return "The line is currently empty."
  }
  
  for (var i= 0; i < arr.length; i++){
    newArr.push(`${i+1}. ${arr[i]}`)
  }
    var positionStr = newArr.join(', ');
    return `The line is currently: ${positionStr}`
  
}




