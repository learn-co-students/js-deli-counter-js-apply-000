var katzDeliLine = [] ;



// function takes two a name input and pushes to the katzDeliLine array 
function takeANumber(katzDeliLine,name){
  
  katzDeliLine.push(name);
  
  return ('Welcome, ' + name +'.' + ' You are number ' + katzDeliLine.length + ' in line.') 
  
}


// function creates a conditional statement that will return the status of the line who is being served at the moment or if the line is empty

function nowServing(katzDeliLine,personInLine){
  
  
  if (katzDeliLine.length === 0) {
    
      return 'There is nobody waiting to be served!';
    
  }else{
  
  
   
   var customerAtFront = katzDeliLine.shift();
    
    return 'Currently serving ' + customerAtFront + '.'
  
  }
}



// function will loop through the array and return the name and place in line of people currently waiting. If the line is empty it will return the line is empty. 

function currentLine(katzDeliLine){
  
  var Line = []
  
  if (katzDeliLine.length === 0){
    
      return ("The line is currently empty.")    
    
    
  }else{
    
    for (let i = 0; i <katzDeliLine.length ;i++){
      Line.push( `${i+1}. ${katzDeliLine[i]}` )
    }
    
    return `The line is currently: ${ Line.join(', ') }`
    
  }
  
}
