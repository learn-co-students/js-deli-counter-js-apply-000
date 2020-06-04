let katzDeli = [];

function takeANumber(katzDeliLine, customerName){
  const n = katzDeliLine.length + 1;
  const greeting = `Welcome, ${customerName}. You are number ${n} in line.`;
  katzDeliLine.push(customerName);

  return greeting;
}

function nowServing(katzDeliLine){

  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }else {
    const output = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return output;
  }
}

function currentLine (katzDeliLine){
  let output;
  if(katzDeliLine.length===0){
    output = "The line is currently empty."
  }else{
    output = "The line is currently:"
    for(let i=0; i<katzDeliLine.length; i++){
      if(i===0){
        output = `${output} ${i+1}. ${katzDeliLine[i]}`
      }else{
        output = `${output}, ${i+1}. ${katzDeliLine[i]}`
      }
    }
  }
  return output;
}