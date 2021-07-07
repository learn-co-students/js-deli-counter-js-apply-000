
function takeANumber(currentLine,personName){
  currentLine.push(personName);
  var statement="Welcome, "+personName+". You are number "+currentLine.length+" in line.";
  // console.log(statement);
  return statement;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length==0){
    return "There is nobody waiting to be served!";
  }else{
    var first="Currently serving "+katzDeliLine[0]+".";
    katzDeliLine.shift();
    return first;
  }
}

function currentLine(line){
  if(line.length>0){
    var peopleInLine="The line is currently: "
    for (var i = 0; i < line.length; i++) {
      var number=i+1;
      if(i!=line.length-1){
        peopleInLine+=number+". "+line[i]+", ";
      }else{
        peopleInLine+=number+". "+line[i];
      }
    }
    return peopleInLine;
  }else{
    return "The line is currently empty.";
  }
}
