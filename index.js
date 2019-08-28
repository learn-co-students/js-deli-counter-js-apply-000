var katzDeliLine =[];

const takeANumber = (arr,name) =>{
  let pos = arr.length+1
  let myString;
  arr.push(name)
  return `Welcome, ${name}. You are number ${pos} in line.`
}

const nowServing = arr =>{
  let name = arr.shift()
  if(arr.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${name}.`
  }
}


const currentLine = arr =>{
  let myString = "The line is currently: "
  if(arr.length === 0){
    return 'The line is currently empty.'
  }else{
    for(let i =0; i<arr.length; i++){
      if(i === arr.length -1){
        myString+= `${i+1}. ${arr[i]}`
      }else{
        myString+= `${i+1}. ${arr[i]}, `
      }
    }
    return myString
  }
}