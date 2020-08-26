function takeANumber(current_line,person_name){
  current_line = current_line.push(person_name);
  return "Welcome, " + person_name + ". You are number " + current_line + " in line.";
  }
  
  function nowServing(current_line){
    if(current_line.length >= 1){
      var person_name = current_line[0];
      current_line = current_line.shift();
      return "Currently serving " + person_name + ".";
    }
    else{
      return "There is nobody waiting to be served!"
    }
  }
  
  function currentLine(current_line){
    if(current_line.length > 0){
      var i = 0;
      var string = "The line is currently: ";
      while(i < current_line.length){
        if((i + 1)<current_line.length){
        string = string + (i+1) + ". " + current_line[i]+ ", ";
        }
        else{
          string = string + (i+1) + ". " + current_line[i]
        }
        i++;
      }
      return string
    }
    else{
      return "The line is currently empty."
    }
  }
  