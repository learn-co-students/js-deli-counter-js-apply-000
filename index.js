var takeANumber = function(people,personname){ 
  people.push(personname);
var n = people.length ;
 var x = "Welcome, "+personname+". You are number "+n+" in line." 
  return x
  
  
}
var nowServing = function(people){
  if (people.length ===0){
    var x = "There is nobody waiting to be served!"
    return x
    
  }
  if (people.length>0  ){
  var y = "Currently serving "+people.shift()+"."
  return y
  }
}
var currentLine = function(people){ 
  if (people.length ===0){
    var x = "The line is currently empty."
    return x
    
  }
  var z = "The line is currently: "
  
  for (var n=0; n < people.length; n++) {
    var i = n+1
    z = z + i + ". " + people[n]
    
    if (n < people.length -1) {
      z += ', '
    }
  }
  return z
}

  
  
  
  

