function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0 && !line.length){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty."
  } else {
    var string = "The line is currently: "
    for (var i = 1; i < line.length; i++){
      string += `${i}. ${line[i-1]}, `;
    }
    string += `${line.length}. ${line[line.length-1]}`
  }
  return string
}
// line = ["Mary","Jeff","Tom","Mike","Susan"]
//takeANumber(line,"Susan")
