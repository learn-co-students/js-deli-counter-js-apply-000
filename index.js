
    
function takeANumber(currentline, newname){
 
  currentline.push(newname)
  return "Welcome, "+ newname + ". You are number " + currentline.length +" in line."

}
function nowServing(currentline){
 if(currentline.length === 0) return "There is nobody waiting to be served!"
var nextperson =  currentline.shift()
return "Currently serving " + nextperson + "."
  
}
function  currentLine(line){
   if(line.length === 0) return "The line is currently empty."
   var output = "The line is currently: "
   for(var i = 0; i<line.length; i++){
      var name = line[i] 
      var number = i+1
      output = output    + (number) + ". " + name
      if( i<line.length-1){
        output = output + ", "
      }
   }
   return output

}
    

  