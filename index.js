var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name)
  return 'Welcome, ' + name + '. You are number ' +  (line.indexOf(name) +1) + ' in line.'
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var first = line.shift()
    return "Currently serving " + first + "."
  }
}

function currentLine(line){
  if (line.length > 0){
    var text = "The line is currently: "
    for (var i = 0; i<line.length; i++){
     text += (i + 1) + ". " + line[i] + ", "

    }
    return text.slice(0, -2)
  }
  else{
    return "The line is currently empty."
  }
}
