
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}


function nowServing(katzDeliLine){
  
  if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!";
    }else{
      return "Currently serving " + katzDeliLine.shift() + ".";
    }
}


function currentLine(katzDeliLine){
  
  if(katzDeliLine.length === 0){
    
      return "The line is currently empty.";
  } else {
    
    var currentArray = [];
  
    for(var i = 0; i < katzDeliLine.length; i++){
      var customer = katzDeliLine[i];
      var num = i + 1;
    
      currentArray.push(" " + num + ". " + customer);
        
    }
    var currentStr = currentArray.join(",");
    return "The line is currently:" + currentStr; 
  }  
}