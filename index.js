var katzDeliLine = [];

function takeANumber(array, name) // function taking 2 parameters
{
  array.push(name);
  return ('Welcome, '+ name + '. You are number ' + (array.indexOf(name)+1) + ' in line.');
}

function nowServing(array) // accept current line of people
{
  
  var firstPerson = [] // set it to an array to retreive the index, position
  
  // Do a check to see if line is empty 
  if(array.length < 1)
  {
    return 'There is nobody waiting to be served'
  }
  else
  {
      firstPerson.push(array.indexOf[0])
      array.shift();
      return 'Currently serving ' + firstPerson[0] + '.';
  }
  
}


function currentLine(array)
{
  
  var emptyLine = [];
  
  if(array.length === 0) // Do a check to see if line is empty, can be = 0 or <1
  {
    return 'The line is currently empty.'
  }
  else
  {
    for(var i = 0; i<array.length; i++)
    {
      emptyLine.push(array.indexOf(array[i]) + 1, '.', arr[i], ' .' )
    }
    
    return 'The line is currently: ' + empty.join(' ');
  }
  
}