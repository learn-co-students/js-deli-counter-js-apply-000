

function takeANumber(katzDeli, newCustomer)
{
  
  var lineLength = katzDeli.length
  var newArrayPosition = lineLength
  var newCustomerPosition = newArrayPosition + 1
  
  if(lineLength === 0)
  {
    
    katzDeli[0] = newCustomer
    
    return 'Welcome, ' + newCustomer + '. You are number 1 in line.'
  }
  
  if(lineLength > 0)
  {
    
    //katzDeli.push(newCustomer)
    
    katzDeli[newArrayPosition] = newCustomer
    
    return 'Welcome, ' + newCustomer + '. You are number ' + newCustomerPosition + ' in line.'

    
    
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
    
    //for(var ctr = 0; ctr < (katzDeli.length-1); ctr++)
    //{
    //  lineString += (ctr+1) + ". " + katzDeli[ctr] + ", "
    //}
    
    var ctr = 0
    
    while(ctr < katzDeli.length-1 )
    {
      lineString += (ctr+1) + ". " + katzDeli[ctr] + ", "
      ctr++
    }
    
    lineString += (katzDeli.length) + ". " + katzDeli[(katzDeli.length -1)]
    
    //could have had the loop go through the whole array and then sliced off the last comma using lineString.slice(-1)
    
    return lineString
    
    
  }
  
}
