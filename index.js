function takeANumber(current_line,new_name) {
  current_line.push(new_name);
  //var line_length = current_line;
  //line_length ++;
  var welcoming = `Welcome, ${new_name}. You are number ${current_line.length} in line.`
  return welcoming
}

//takeANumber(1,"Ada");

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  }
  else {
    //for (let i = 0; i < katzDeliLine.length; i++) {
      return `Currently serving ${katzDeliLine.shift()}.`
    //}
  }
}

function currentLine(current_line) {
  if (current_line.length < 1) {
    return "The line is currently empty."
  }
  else {
    var line_array= [];
    for (var j = 0; j < current_line.length; j++) {
      line_array.push((j+1) + '. ' + current_line[j]);
    }
    return `The line is currently: ${line_array.join(', ')}`
    
    //for (var i = 0; i < current_line.length; i++) {
    //  return `The line is currently: ${i}. ${current_line[i]}`
    //}
  }
}
//the_line = ["Ada"];
//nowServing(the_line);
