function takeANumber(arr, name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr){
    if(arr.length === 0){
      return "There is nobody waiting to be served!"
    }
    else{
      let firstPerson = arr.shift();
      return `Currently serving ${firstPerson}.`
    }
}

function currentLine(arr){
  if(arr.length === 0){
    return `The line is currently empty.`
  }
  let finalArr = []
  for(let i = 0; i<arr.length; i++){
    let name = arr[i];
    finalArr.push(`${i+1}. ${name},`)
  }
  let str = finalArr.join(' ')
  return `The line is currently: ${str.slice(0,-1)}`

}
