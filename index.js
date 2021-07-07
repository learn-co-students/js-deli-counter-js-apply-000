function takeANumber(katzDeli, name) {
    
    if (katzDeli.length > 0);
      katzDeli.push(name);
      return ('Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.')
  }
   takeANumber(katzDeli, 'Ada');
   
function nowServing(katzDeli) {
  
  
  if(katzDeli.length=== 0) {
    return 'There is nobody waiting to be served!'
  } 
  var result = katzDeli.shift()
  
  return  'Currently serving ' + result + ".";
}

nowServing()

function currentLine(katzDeli) {
  if(katzDeli.length ===0) {
    return 'The line is currently empty.'
  }else {
    
    return`The line is currently: ${katzDeli.indexOf('Bill')+1}. ${katzDeli[0]}, ${katzDeli.indexOf('Jane')+1}. ${katzDeli[1]}, ${katzDeli.indexOf('Ann')+1}. ${katzDeli[2]}`
 }

    
  
  
  
}