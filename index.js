var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(DeliLine, name){
  DeliLine.push(name);
  return `Welcome, ${name}. You are number ${DeliLine.length} in line.`;
}

takeANumber(otherDeli, 'Grace');
takeANumber(katzDeli, 'Ada');
takeANumber(katzDeli, 'Grace');
takeANumber(katzDeli, 'Kent');

function nowServing (DeliLine){
  if(DeliLine.length>0){
    console.log(`Currently serving ${DeliLine[0]}.`);
    DeliLine.shift();
  } else{
    return "There is nobody waiting to be served!";
  }
}

const deliLine = ["Steven", "Blake", "Avi"];
nowServing(deliLine);
