var katzDeli = [];

takeANumber = function(katzDeliLine, name){
katzDeliLine.push(name)
return "Welcome, " + name + "." + " You are number " + katzDeliLine.length + " in line."
}
function nowServing(katzDeliLine, name){
katzDeliLine.pop(name)
  return katzDeliLine.length[katzDeliLine.length-1]
  if(katzDeliLine===0){
    return "There is nobody waiting to be served!"
    }
}
