let katzDeliLine = [];

const takeANumber = (line, name) => {
  let place = line.length + 1
  place =  place.toString()
  line.push(name)
  
  return `Welcome, ${name}. You are number ${place} in line.`
}

const nowServing = (katzDeliLine) => {
  if (katzDeliLine[0] === undefined){
    return 'There is nobody waiting to be served!'
  }
  else {
    let frontOfLine = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${frontOfLine}.`
  }
  
}

const currentLine = (katzDeliLine) => {
 let ans = 'The line is currently:';
 
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
  else{
    
    for(let i = 0; i < katzDeliLine.length; ++i){
      let placeAndName = ' ' + (i + 1) + `. ${katzDeliLine[i]},`
      ans += placeAndName
      
    }
  }
  return ans.slice(0, -1)
}
  
