function takeANumber(currentLine, name){
  currentLine.push(name);
  return (`Welcome, ${name}. You are number ${currentLine.length} in line.`)
  }
  
  function nowServing(currentLine){
    if (currentLine.length > 0){
      var currentCustomer =  currentLine[0];
      currentLine.shift();
      return (`Currently serving ${currentCustomer}.`);
    } else {
      return (`There is nobody waiting to be served!`)
    }
  }
  
  function currentLine(lineOfPeople){
    if(lineOfPeople.length > 0) {
      var line = [];
      
      for (var i = 0; i < lineOfPeople.length; i++){
      line.push(" " + [i+1] + ". " + lineOfPeople[i])
      }
      return ("The line is currently:" + line);
    } else {
      return (`The line is currently empty.`)
  }
  }
  
  
  
  