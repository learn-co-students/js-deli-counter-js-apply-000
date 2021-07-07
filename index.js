function takeANumber(line, person){
    line.push(person);
    var message = "Welcome, " + person + ". You are number " + line.length + " in line."
    return message;
}

function nowServing(line){
    if (line.length === 0){return "There is nobody waiting to be served!"}
    else return ("Currently serving " + line.shift() + ".");
}

function currentLine(line){
    if (line.length === 0){return "The line is currently empty."}
    else {
      var message = "The line is currently: "
      for (let i = 0; i < line.length; i++){
          message += (i + 1) + ". " + line[i] + ", ";
      }
      return message.slice(0, -2);
    }
}
