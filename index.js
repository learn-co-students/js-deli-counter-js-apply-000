var katzDeli = [];

function takeANumber(katzDeliLine, name){
  let katzDeli = katzDeliLine;
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
  }

function nowServing(katzDeliLine){
 let katzDeli = katzDeliLine;
  for(let i= 0; i <= katzDeli.length; i++){
    if(katzDeli.length === 0){ 
      return "There is nobody waiting to be served!";
    }else return `Currently serving ${katzDeli.shift()}.`;
  }

}

function currentLine(katzDeliLine){
  let katzDeli = katzDeliLine;
  var theLine = [];
  for(let i = 0; i < katzDeli.length; i++){
    theLine.push(" " + [i+1] + ". " +  katzDeli[i]);
  }
  
  if(katzDeli.length === 0) return "The line is currently empty.";
  else return `The line is currently:` + theLine.join(",");
  
}

nowServing(katzDeliLine, function(){
  currentLine(katzDeliLine);
});
  

