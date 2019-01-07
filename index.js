var katzDeliLine = [];

function takeANumber(Arr, name){ // "Welcome, Ada. You are number 1 in line."
  Arr.push(name);
  return (`Welcome, ${name}. You are number ${Arr.length} in line.`);
}

function nowServing(Arr){ // "Currently serving Ada."
  var message;
  if (Arr.length === 0) {
    message = "There is nobody waiting to be served!";
  }else{
   var current =  Arr.shift();
   message  = `Currently serving ${current}.`
  }
  return message;
}


function currentLine(Arr){ // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
  var message;
  if (Arr.length === 0) {
    message  = "The line is currently empty."
  }else{
    message  = "The line is currently:"
    for (var i = 0; i < Arr.length; i++) {
      message += ` ${i+1}. ${Arr[i]}` ;
      if(i+1<Arr.length){
        message += ",";
      }
    }
  }
  return message;
 }
