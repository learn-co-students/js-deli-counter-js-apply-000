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
    
    for(let i = 1; i<=katzDeli.length; i ++){
    return 'The line is  currently: ' +  [i].indexOf() + '.' + ' '  + katzDeli
    }
    
  }
  
  
}