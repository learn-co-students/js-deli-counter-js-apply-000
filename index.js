let katzDeliLine = [];
let newPerson = "";

takeANumber(katzDeliLine,newPerson);
function takeANumber(line,person) {
  let msg = "";
  var len = line.length;
  line[len] = person;
  msg = `Welcome, ${person}. You are number ${len+1} in line.`
  return msg;
}
//*************************************************************************
nowServing(katzDeliLine);
function nowServing(line) {
  let msg= "";
  if(line.length === 0) {
    msg = "There is nobody waiting to be served!";
  }
  else {
    msg = `Currently serving ${line[0]}.`;
    line.shift();
  }
  return msg;
}

//*************************************************************************
currentLine(katzDeliLine);
function currentLine(line) {
  let msg = "";
  if( line.length === 0 ) {
    msg = "The line is currently empty.";
  }
  else {
    msg = "The line is currently: ";
    for(let i = 0; i<line.length-1;i++) {
      msg += `${i+1}. ${line[i]}, `;
    }
    //Add the last person in line and end msg with a ".""
    msg +=  `${line.length}. ${line[line.length-1]}`;
  }
  return msg;
}
//*************************************************************************
