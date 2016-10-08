var katzDeli=[];
var katzDeliLine=0;

function takeANumber(array, name){
  array.unshift(name);
  var katzDeliLine= array.indexOf(name);
  return "Welcome, "+name+". You are number "+ (katzDeliLine+1)+ " in line.";
}
