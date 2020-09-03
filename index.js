const katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+ name +"." + " You are number " + katzDeliLine.length +" in line.";
}

function nowServing(n){
  if (n.length !== 0){
    const name = n[0];
    n.splice(0,1);
  return "Currently serving " + name + ".";
  }
  else{
    return "There is nobody waiting to be served!";
    
  }
}

function currentLine (line){
  var str = "";
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else{
    str = "The line is currently: ";
    for(var i = 0; i<line.length; i++){
      str += (i+1) + ". " + line[i] + ", ";
     }
      return str.slice(0,-2);
}
  }
 