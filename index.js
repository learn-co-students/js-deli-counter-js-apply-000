function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${(katzDeliLine.indexOf(name)+1)} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine.shift()}.`
    } else {
    return "There is nobody waiting to be served!"
    }
  }
  
  function currentLine(katzDeliLine){
    if(katzDeliLine.length>0){
      let str = `The line is currently:`
      for(let i=0;i<katzDeliLine.length;i++){
        str = str.concat(" ", `${i+1}. ${katzDeliLine[i]},`)
      }
      return str.replace(/,\s*$/, "");

    } else {
      return "The line is currently empty."
    }
  }