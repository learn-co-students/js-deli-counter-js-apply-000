function takeANumber(theLine,personName){
  theLine.push(`${personName}`)
  return `Welcome, ${personName}. You are number ${theLine.length} in line.`
}

function nowServing(theLine){
  if(Array.isArray(theLine) && theLine.length>0){
    return "Currently serving "+theLine.shift()+"."
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(theLine){
  let staticStmt="The line is currently: "
  if(!theLine.length){
    return "The line is currently empty."
  }
  else{
    for(let i =0; i<theLine.length;i++){
      staticStmt+=`${i+1}. ${theLine[i]}${theLine.length-1!==i?", ":""}`
    }
  }
  return staticStmt;
}