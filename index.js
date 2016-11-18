function takeANumber(katzDeli,name){//create a function and give it a name "takeANumber". Give it 2 parameters katzDeli and name
  katzDeli.push(name)//now add to the end of the array katzDeli the value of (name)
  return "Welcome, "+ name +". You are number "+ katzDeli.length +" in line."//now return the value of (name) and using .length callout the position it is within the array
}
function nowServing(array){//create a function and name it 'nowServing'
var s// created a variable wihtout a value and named it s
if(array.length===0){//if the array is equal to 0(empty) it will give a value to the var
s = "There is nobody waiting to be served!"// this is the given variable if its 0
}
else{
  s = "Currently serving " + array[0]+"."//if not the variable will equal to index[0] of the array
  array.shift()// and remove the first value of the array
}
return s// returns the variable after removing the first value of the array
}
function currentLine(line){///create a function and name it currentLine with a parameter name line
  var s="The line is currently:"/// create a var and store a value
  if(line.length===0){/// if arrays length is equal to 0
  s= "The line is currently empty."/// 
  }
  else{
    for(var i=0; i<line.length; i++){
if(i<line.length-1){
    s=s+" "+(i+1)+". "+line[i]+","}
    else {
      s=s+" "+(i+1)+". "+line[i]
  }
}
}
return s
}
