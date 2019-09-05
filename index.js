var katzDeliLine = [];

const takeANumber = (arr,name) =>{
  // get position of added name
  let nameIndex = arr.length + 1
  // append name to end of  array
  arr.push(name)
  return `Welcome, ${name}. You are number ${nameIndex} in line.`
}

const nowServing = arr =>{
  if(arr.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    let person = arr.shift()
    return `Currently serving ${person}.`
  }
}


const currentLine = arr =>{
  let newString = "The line is currently: "
  if(arr.length === 0){
      return 'The line is currently empty.'
  }else{
    for(let i=0; i<arr.length; i++){
      if(i === arr.length-1){
        newString+=`${i+1}. ${arr[i]}`
      }else{
        newString +=`${i+1}. ${arr[i]}, `
      }
    }
  }
  
  return newString
}



