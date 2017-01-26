var katzDeliLine = [];

var takeANumber = (line, name)=> {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length +" in line.";
}

var nowServing = (line) => {
  if(line.length==0) return "There is nobody waiting to be served!";
  else {
    var tempName = line[0];
    line.shift();
    return "Currently serving " + tempName + ".";
  }

}

var currentLine = (line) => {
  if(line.length==0) return "The line is currently empty.";
  else {
    var message = "The line is currently: "
    for(var i=0;i<line.length;i++){
      message+= (i+1) + ". " + line[i] + (i==(line.length-1) ? "" : ", ");
    }
    return message;
  }
}
