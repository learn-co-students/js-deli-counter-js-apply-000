
function takeANumber(cur_line,new_name){
  cur_line.push(new_name)
  return "Welcome, " + new_name + ". You are number " + cur_line.length + " in line."
}

function nowServing(line){
  var value = ''
  if(line.length === 0){
    value = "There is nobody waiting to be served!"
  } else {
    value = "Currently serving " + line.shift() + "."
  }
  return value
}

function currentLine(line){
  if(line.length == 0){
    return "The line is currently empty."
  }
  var e = "The line is currently: "
  for(var i = 1; i <= line.length; i++){
     if(i === line.length){
       e +=  i + ". " + line[i-1]
    }else{
       e +=  i + ". " + line[i-1] + ", "
    }
  }
  
  return e
}