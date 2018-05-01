var katzDeli = [ ];

function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
  
}

function nowServing(line){
  if (line.length === 0 ){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently: "
    for(var element = 0; element < line.length; element++){
      str += `${element+1}.` + ` ${line[element]}, `
    }
    var cleanStr = str.slice(0,-2)
    return cleanStr
  }
}