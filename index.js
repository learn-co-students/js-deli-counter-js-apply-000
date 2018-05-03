var katzDeli = [];

var num = 0;

function takeANumber(katzDeli, name){

  katzDeli = katzDeli.push(name);
  num += 1
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeli){

  if (katzDeli.length > 0){
  	var firstInLine = katzDeli.shift();
  	num -= 1
	return `Currently serving ${firstInLine}.`
  }else {
	return `There is nobody waiting to be served!`
  }
}

function currentLine(line){

  var line = [];
  var i = 0;

  while (i < katzDeli.length){
  	line.push(i+1 + ". " + katzDeli[i]);
  	i++;
  }

  if (katzDeli.length > 0) {
  	//return `The line is currently: ${line}`
  	return "The line is currently: " + line + " ";
  } else{
   return "The line is currently empty."
  }
}

//nowServing(katzDeli);
takeANumber(katzDeli, "Bill");
takeANumber(katzDeli, "Jane");
takeANumber(katzDeli, "Ann");
//nowServing(katzDeli);
// nowServing(katzDeli);
// currentLine(katzDeli);

