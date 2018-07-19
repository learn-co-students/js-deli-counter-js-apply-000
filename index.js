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

