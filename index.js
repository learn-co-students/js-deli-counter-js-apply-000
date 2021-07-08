const katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);

  return "Welcome, " +newPerson+ ". You are number "+ katzDeliLine.length +" in line.";


};

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving " + katzDeliLine.shift()+".";
  }

};


function currentLine(katzDeliLine){
var currentPlacement = [];
  if(!katzDeliLine.length){
    return "The line is currently empty.";
  }else{
    for(var i = 0; i < katzDeliLine.length; i++){
      currentPlacement.push  (i+1 + ". " +katzDeliLine[i]) ;
    }
  }
  return "The line is currently: "+ currentPlacement.join(', ');
};
