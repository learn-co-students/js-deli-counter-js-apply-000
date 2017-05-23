var katzDeli = []

function takeANumber(spot,name){
  var person = name
  spot.push(person)
  var space = spot.length

  var otherDeli = "Welcome, "+ name+". You are number "+ space +" in line."
  return otherDeli
}

function nowServing(line){
    var serve = line
    var long = line.length
    var guest = " "
    if(long>0){
      guest = "Currently serving " + serve[0]+ "."
      serve.shift()
      return guest

    } else{
    return "There is nobody waiting to be served!"
  }
}


function currentLine(line){
katzDeli = line
var j = 0
var list = ""
  if(katzDeli.length>0){
    while(j<katzDeli.length){

      list += (j+1 ) + ". " + katzDeli[j]
      j++
      if(j!=katzDeli.length)
        list += ", "
    }
    return "The line is currently: " + list
  }else (katzDeli.length==0)
    return "The line is currently empty."
}
