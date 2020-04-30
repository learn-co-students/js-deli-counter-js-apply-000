var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){
  if(katzDeli <= 0){
    return "There is nobody waiting to be served!";
  } else {
    return 'Currently serving ' + katzDeli.shift()+'.';
    }
  }
 function currentLine(arr){
   if(arr.length === 0){
     return "The line is currently empty.";
   } else {
     let customerAndNumber = [];
     for(let i = 0; i < arr.length; i++){
     customerAndNumber.push(i + 1 + '. ' + arr[i]);
     }
   return 'The line is currently: ' + customerAndNumber.join(', ');
 }
 }
 

