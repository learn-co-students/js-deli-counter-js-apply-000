var katzDeli=[];
var katzDeliLine;
var otherDeli = ["Steven", "Blake", "Avi"];


function takeANumber(array, name){
  array.push(name);
  var katzDeliLine= array.indexOf(name);
  return "Welcome, "+name+". You are number "+ (katzDeliLine+1)+ " in line.";
}

function nowServing(array){

  if(array[0]==null){
    return "There is nobody waiting to be served!";
  }
  else{
    var announcement="Currently serving "+ array[0]+".";
    array.shift();
    return announcement;
  }
}

function currentLine(array){
  if(array[0]==null){
    return "The line is currently empty.";
  }
  else{
    var i=0;
    var announcement= "The line is currently: ";
    while(array[i]!=null){
      announcement+=(i+1)+ ". " + array[i]+ " ";
    }
  }
  return announcement;
}
