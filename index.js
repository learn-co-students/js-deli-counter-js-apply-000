function takeANumber(line, person){
  line.push(person)
  var num = line.length
  return `Welcome, ${person}. You are number ${num} in line.`
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!' 
  } else {
  
  var name = katzDeliLine[0];
  katzDeliLine.shift();
  
  return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  var result1 = [];
  
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
    var result2 = ''
    
    for (let i = 0; i < katzDeliLine.length; i++) {
      var num = i + 1;
      var name = katzDeliLine[i];
      var string = `${num}. ${name}`
      result1.push(string)
      
      result2 = result1.join(", ");
      console.log(result2);
    }
    return `The line is currently: ${result2}`
  }
}