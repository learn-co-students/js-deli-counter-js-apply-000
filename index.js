var katzDeline = [];
function takeANumber(katzDeline, name){
  katzDeline.push(name)
  return "Welcome, " + name + ". You are number "+ katzDeline.length +" in line.";
}



function currentLine(katzDeliLine){
  var string = '';
  var line = '';
  if (katzDeliLine.length >0){

    for (var i=0; i< katzDeliLine.length; i++){
      string =`${i+1}. ${katzDeliLine[i]}, `;
      line += string;
      }
    var newStr = "The line is currently: " + line;
    return newStr.slice(0,-2);

  }else{
    return "The line is currently empty."
  }
};



function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
      var servingLine = `Currently serving ${line[0]}.` ;
      line.shift();
      return servingLine;
  }
}
