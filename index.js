function takeANumber(katzDeliLine, name) {
  var deliNumber = katzDeliLine.length + 1;
  var deliLoudspeaker = "Welcome, " + name + ". You are number " + deliNumber + " in line.";
  katzDeliLine.push(name);
  return deliLoudspeaker;
}

function nowServing(katzDeliLine) {
var deliNumber = katzDeliLine.length + 1;
var deliLoudspeaker;
if (katzDeliLine.length === 0){deliLoudspeaker = "There is nobody waiting to be served!"}
else{deliLoudspeaker = "Currently serving " + katzDeliLine[0] + "."
katzDeliLine.shift();
}
return deliLoudspeaker
}

function currentLine(katzDeliLine){
  var deliLoudspeaker;
  var deliNumber = katzDeliLine.length + 1;
if (katzDeliLine.length === 0){deliLoudspeaker = "The line is currently empty."}
else {
  deliLoudspeaker = "The line is currently: "
for(var i = 0; i < katzDeliLine.length ; i++){
if (i === 0){

deliLoudspeaker = deliLoudspeaker + (i+1) + ". " + katzDeliLine[i];
}
else{
deliLoudspeaker = deliLoudspeaker + ", " + (i+1) + ". " + katzDeliLine[i];
}
}
}


return deliLoudspeaker;
}
takeANumber("Ada")
takeANumber("Grace")
nowServing
nowServing
takeANumber("Steven")
takeANumber("Blake")
takeANumber("Avi")
nowServing
nowServing
takeANumber("Bill")
takeANumber("Jane")
takeANumber("Ann")
currentLine