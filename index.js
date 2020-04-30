function takeANumber(current_cust_array, cust_name)
{
  var result = current_cust_array.push(cust_name)
  var message
  if(Array.isArray(cust_name))
  {
    for(i=0;i<cust_name.length;i++)
    {
      message.push('Welcome, ' + cust_name + '. You are number ' + (current_cust_array.length + i) + ' in line.')
    }
  }
  else message = ('Welcome, ' + cust_name + '. You are number ' + (current_cust_array.length) + ' in line.')
  return result, message
}

function nowServing(katzDeliLine)
{
  var message
  var result
  if(katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    message = "Currently serving " + katzDeliLine[0] + "."
    result = katzDeliLine.shift()
    return result, message
  }
}

function currentLine(katzDeliLine)
{
  var result
  var temp_array = []
  var i = 0
  if(katzDeliLine.length === 0)
  {
    result = "The line is currently empty."
  }
  else
  {
    do
    {
      temp_array.push((i + 1) + ". " + katzDeliLine[i])
      i++
    }
    while(i<katzDeliLine.length)
    var temp_string = temp_array.join(", ")
    result = ("The line is currently: " + temp_string)
  }
      return result
}