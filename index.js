// function takeANumber
function takeANumber(katzDeli, x) {
var Ans;  var l;
katzDeli.push(x)
l = katzDeli.length
Ans = "Welcome, " + x + ". You are number " + l + " in line."
return Ans
}

// function nowServing
function nowServing(line) {
var ans; var l1 = line.length
var i;
if (l1 <2) {
ans = "There is nobody waiting to be served!"}
else {
  for (i=0;i<l1;i++)
  ans = "Currently serving " + line[0] + "." }
  line.splice(line[0], 1)
return ans
}

//function currentLine
function currentLine(line) {
var ANS; var ll = line.length
var i; var ne = [];
if (ll < 2)
  {ANS = "The line is currently empty."
}
else {
  for (i=0;i<ll;i++)
  ne.push(` ${i+1}. ${line [i]}`)
ANS = "The line is currently:" + ne
}
return ANS
}