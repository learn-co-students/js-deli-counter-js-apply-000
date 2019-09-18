

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length > 0){
     var k = katzDeliLine.shift()
       return `Currently serving ${k}.`
    }else if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!"
    }
  }
  
  
  function currentLine(katzDeliLine){
    let num = 0;
    if(katzDeliLine.length === 0 ){
      return "The line is currently empty."
    }
    let result = 'The line is currently: ';
    for(var i=0; i<katzDeliLine.length; i++){
    if(katzDeliLine){
      num++
      result += `${num}. ${katzDeliLine[i]}, `
     
    }
    }
    const res = result.slice(0,-2)
    console.log('<<<<<<<<<< REUSLT', typeof result)
     return res;
  }
  
  
  
  
  
  