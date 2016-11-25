

function takeANumber(katzDeli,name) {
var place = parseInt(katzDeli.length);
katzDeli[place]=name
return "Welcome, "+name+". You are number "+(place+1)+" in line."
}
function nowServing(katzDeli) {
var place = parseInt(katzDeli.length);
if(place==0)
return "There is nobody waiting to be served!"
else {
  return "Currently serving "+katzDeli.shift()+"."
}
}
function currentLine(katzDeli) {
  var place = parseInt(katzDeli.length);
  if(place==0)
  return "The line is currently empty."
  else {
    var result=[];
    for (var i = 0; i < place; i++) {
        result[i]=(i+1)+". "+ katzDeli[i]
    }
    return "The line is currently: "+result.join(', ')
  }
}
