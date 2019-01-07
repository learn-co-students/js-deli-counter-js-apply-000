function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + "." + " You are number "+ katzDeliLine.length + " in line.";
}

function nowServing(line) {
  if (line.length == 0) {
  return('There is nobody waiting to be served!');
} else {
  return "Currently serving " + line.shift()+ ".";
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    var array=[]
    var count=0
    while(count<line.length) {
      array.push(" "+(count+1) + ". " + line[count]);
      count++;
    }
    return "The line is currently:" + array;
  }
}
