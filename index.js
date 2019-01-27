function takeANumber(katzDeli, newCustomer)
{
  
  if(katzDeli.length === 0)
  {
    katzDeli[0] = newCustomer
    return 'Welcome, ' + katzDeli[0] + '. You are number ' + katzDeli.length + ' in line.'
    //return 'Welcome, ' + katzDeli[0] + '. You are number 1 in line.'
  }
  
  if(katzDeli.length > 0)
  {
    
    for(var ctr = 0; ctr < newCustomer.length; ctr++)
    {
      katzDeli[(katzDeli.length + ctr)] = newCustomer
      return 'Welcome, ' + katzDeli[(katzDeli.length - 1)] + '. You are number ' + katzDeli.length + ' in line.'
    }
    
    //katzDeli.push(newCustomer)
    //return 'Welcome, ' + katzDeli[(katzDeli.length - 1)] + '. You are number ' + katzDeli.length + ' in line.'
  }
  
}

function nowServing(katzDeli)
{
  
  if(katzDeli.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  
  if(katzDeli.length > 1)
  {
    return "Currently serving " + katzDeli.shift() + "." 
  
    
  }
}

function currentLine(katzDeli)
{
  
  if(katzDeli.length === 0)
  {
    return 'The line is currently empty.'
  }
  
  if(katzDeli.length > 0)
  {
    var lineString = "The line is currently: "
    
    for(var ctr = 0; ctr < (katzDeli.length-1); ctr++)
    {
      lineString += (ctr+1) + ". " + katzDeli[ctr] + ", "
    }
    
    lineString += (katzDeli.length) + ". " + katzDeli[(katzDeli.length -1)]
    
    //lineString = lineString.slice(0,-1) doesn't work for whatever reason
    
    return lineString
    
    
  }
  
}
