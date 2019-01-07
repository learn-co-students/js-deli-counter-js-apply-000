function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var serving = katzDeliLine.shift();
  if (serving)
    return `Currently serving ${serving}.`
  else
    return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  var currently = "The line is currently";
  
  if (katzDeliLine.length === 0) {
    return `${currently} empty.`;
  } else {
    currently = `${currently}: `;
  }
  
  for ( var i = 0; i < katzDeliLine.length; i++ ) {
    currently = `${currently}${i+1}. ${katzDeliLine[i]}`;
    if ( i !== katzDeliLine.length-1 ) {
      currently = `${currently}, `;
    }
  }
  
  return currently;
}