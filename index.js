function takeANumber(currentPeople, newName){
  
  currentPeople.push(newName);
  
  var spot = currentPeople.length;
  
  return `Welcome, ${newName}. You are number ${spot} in line.`;
}


function nowServing(katzDeliLine){
  
  if(katzDeliLine.length > 0){
    var firstSpot = katzDeliLine[0]
    katzDeliLine.shift();
    return `Currently serving ${firstSpot}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
  katzDeliLine.shift();
}


function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var string = "The line is currently: "
      
        for(let i=0; i<katzDeliLine.length; i++){
          
            var number = i+1;
            
            string = string + number + ". " + katzDeliLine[i] + ", ";
        }
        
        //okay, I KNOW THIS IS SLOPPY, im sorry, i had a few ideas on how to do this much more elegantly but none of them went as expected!!! GRRR!! help will certainly be appreciated here
       //so it would be easier to just use .pop(), but for some reason it isnt working that i dont understand?
      
    string = string.split("");
    var popper = string.length-2
    var popper2 = string.length-1
    delete string[popper];
    delete string[popper2];
    string = string.join("");
    
    return string;
      
    
  }else{
    return "The line is currently empty.";
  }
  
  
}





