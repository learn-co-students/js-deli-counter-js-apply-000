function takeANumber(katzDeli, name, quee ){
  katzDeli.push(name)
  console.log(katzDeli);
  var lastPerson = katzDeli.indexOf(name) + 1
  return 'Welcome, ' + name + '. You are number ' + lastPerson + ' in line.'
}

function nowServing( deliLine ){
  var message = "";
  if (deliLine.length === 0){
    message = "There is nobody waiting to be served!"
  }else{
     message = 'Currently serving ' + deliLine[0] + ".";
     deliLine.shift();
  }
  return message;
}

function currentLine (line){
  var message ="";
  if (line.length === 0){
    message = "The line is currently empty."
    
  }else if(line.length !== 0){
    message =  "The line is currently: "
    
    
    for(let i = 0 ; i < line.length; i++){
      message += i+1 + ". " + line[i] + ", "
  
    }
    message =message.slice(0, message.length-2)
      
    
  }
return message
  
}
