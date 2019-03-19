function takeANumber(line,name){
  var i = line.length + 1;
  var greeting = "Welcome, " + name +". You are number " + i +" in line.";
  line.push(name);
  return greeting;
}

function nowServing(katzDeliLine){
  var i= 0;
  var x = katzDeliLine[i];
  if(x === undefined){
    return "There is nobody waiting to be served!"}
    else {
    var nowserving = katzDeliLine[i];
    katzDeliLine.shift(1); 
    return "Currently serving " +nowserving+".";
    }

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    console.log("this should be an empty array",katzDeliLine);
    return "The line is currently empty.";
  } 
 
  for(var i = 0; i< katzDeliLine.length; i++){
    var string;
    var q = i + 1;
    string = " "+ q +". " + katzDeliLine[i];
  katzDeliLine[i] = string;
  }
  
  var finaltextwitharray = "The line is currently:" + katzDeliLine;
  console.log("finaltextwitharray",finaltextwitharray);
  return finaltextwitharray;
    
}
  