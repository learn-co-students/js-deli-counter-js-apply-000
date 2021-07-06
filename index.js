var takeANumber = function(line, name){
  
  line.push(name);
  var num = line.indexOf(name);

  return (`Welcome, ${name}. You are number ${num+1} in line.`);
  
}

var nowServing = function (line){
  
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
var str = "Currently serving "+ line[0] +"."
line.shift();
  return str ;
  
  }
}
var currentLine = function (line){
  
  if (line.length > 0)
  {
    
  
    let str =  ("The line is currently: ");
  
  for (let x = 0; x < line.length; x++){
    
    str += ((x+1) + ". ");
    str += (line[x]);
    if ((x+1)<line.length){
      str+= ", ";
    }
    
  }
  return str;
  }
  else{
    return ("The line is currently empty.");
  }
}