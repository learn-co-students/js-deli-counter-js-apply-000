function takeANumber(arr, name){
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.indexOf(name) + 1} in line.`
}

function currentLine(arr){
    if(!arr.length){
      return "The line is currently empty."
    }
    var str = "The line is currently: ";
    for (var i = 0; i< arr.length; i++){
        str += `${i+1}. ${arr[i]}`;
        if (i !== arr.length -1){
            str += ', '
        }
    }
    return str;
}

function nowServing(arr){
    if(!arr.length){
        return "There is nobody waiting to be served!"
    }
    var serving = arr.shift()
    return `Currently serving ${serving}.`;
}
