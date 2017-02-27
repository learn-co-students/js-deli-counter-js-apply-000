  var katzDeli = [];
  var otherDeli = ["Steven", "Blake", "Avi"];



function takeANumber(katzDeli, name)   {

  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}



function nowServing()  {
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeli[0];
    katzDeli.shift();
  }
}



function currentLine()   {

if (katzDeli.length == 0)   {
  return "The line is currently empty.";
}

else {
  return "The line is currently: "

  var i;
  for (i=0; i < katzDeli.length; i++;) {
    return (i+1) + ". " + katzDeli[i];
  }
 }
}
