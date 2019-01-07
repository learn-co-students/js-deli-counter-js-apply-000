
function takeANumber(list, name){
    list.push(name);
    var len = list.length;
    return `Welcome, ${name}. You are number ${len} in line.`
}
  
function nowServing(list){
  var len = list.length;
  if( len == 0 )
    return "There is nobody waiting to be served!"
  var name = list.shift()
  return `Currently serving ${name}.`;
}

  
function currentLine(list){
  var len = list.length
  if( len == 0 )
    return "The line is currently empty."
  var str = "The line is currently:";
  for( var i = 1; i<=len; i++){
    if( i < len )
      str += ` ${i}. ${list[i-1]},`;
    else
      str += ` ${i}. ${list[i-1]}`;
  }
  return str
}