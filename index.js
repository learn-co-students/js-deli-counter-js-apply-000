
var i=0
takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name)
  var a=`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  i++
  return a
  
}

  function nowServing(deliLine){
    while(deliLine.length>0){
      var a=deliLine.shift()
      return `Currently serving ${a}.`
    }
    if(deliLine.length===0){
      return("There is nobody waiting to be served!")
    }
  }
  
  
  
  
  
  function currentLine(line){
   if (line.length>0){
   var linePeeps=[]
   for (let i=0; i<line.length; i++)      
    linePeeps.push(` ${i+1}. ${line[i]}`)
   return (`The line is currently:` + linePeeps.join())}
   if (line.length===0){
     return('The line is currently empty.')
   }
    }
  
  
  
  