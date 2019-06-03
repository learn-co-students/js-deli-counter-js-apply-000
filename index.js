function takeANumber(line, name){
 line.push(name);
  return ("Welcome, " + name + ". You are number " +  line.length +" in line.");

}

function nowServing(line){
  if (line.length===0){
    return ("There is nobody waiting to be served!")
  }else{
    let temp = line[0];
    line.shift(line[0]);
    return "Currently serving " + temp + ".";
  }
  
}

function currentLine(line){
  let customer = [];
  if (line.length ===0){
    return ("The line is currently empty.");
  }else{
    for (let i =0;i<line.length;i++){
    customer.push((i+1) + ". "+line[i]);
  }
  return ("The line is currently: " + customer.join(", "));
  }
  
}