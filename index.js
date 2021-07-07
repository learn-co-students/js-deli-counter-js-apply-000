function takeANumber (arr, name)
{
  arr.push(name);
  var position = arr.indexOf(name, 0) + 1;
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing (arr)
{
  if (arr === undefined || arr.length < 1)
  {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + arr.shift() + ".";
}

function currentLine (arr)
{
  if (arr === undefined || arr.length < 1)
  {
    return "The line is currently empty."
  }
  
  var currentPosition = 1;
  for (let i = 0; i < arr.length; i++)
  {
    arr[i] = currentPosition + ". " + arr[i];
    currentPosition++;
  }
  var s = arr.join(", ");
  return "The line is currently: " + s;
  
}