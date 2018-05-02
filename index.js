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
  i = 0;

  while (i < katzDeli.length){
  	line.push(i+1 + "." + katzDeli[i]);
  	i++;
  }
  	//console.log(numberedLine);
  return `The line is currently: ${line}`
}

