let katzDeliLine= []
//
function takeANumber (katzDeliLine,name){
  katzDeliLine.push(name)
  let msg= `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return msg
}
//
//
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    let emtmsg= `There is nobody waiting to be served!`
    return emtmsg
  }else{
    let name= katzDeliLine[0]
    katzDeliLine.splice(0,1)
    let servmsg= `Currently serving ${name}.`
    return servmsg
  }
}
//
//
function currentLine (katzDeliLine){
  let str= "The line is currently"
  let part= []
  if(katzDeliLine.length===0){
    let finalmsg= ` empty.`
    str+= finalmsg
    return str
  }else{
    for (let i=0; i<katzDeliLine.length; i++){
      part.push(` `+[i+1]+". "+katzDeliLine[i])
    }
  }
  return (`${str}:`+part.join(","))
}