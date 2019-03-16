var katzDeli=[]

function takeANumber(katzDeli,name){
  katzDeli.push(name)
  var current=katzDeli.length
  return 'Welcome, '+name+'. You are number '+current+' in line.'
  
}

function nowServing(katzDeliLine){
  if (!katzDeliLine.length){  //condition where there is nothing in the array
    return 'There is nobody waiting to be served!'
  }else{
  return 'Currently serving '+katzDeliLine.shift()+'.' //katzDeliLine.shift() returns the first element in the array but then after that shifts the array to the left
  }
}

function currentLine(current){
  if (!current.length){
    return 'The line is currently empty.'
  }
  var text=[]
  var i
  for (i=0;i<current.length;i++){
    text.push((i+1)+'. '+current[i])
  }
  return 'The line is currently: '+text.join(', ') //joining the elements in the text with ', '
  
}
