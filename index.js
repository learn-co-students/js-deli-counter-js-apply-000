//Take a number
  var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

//function came from example usage replaced "" with name
//${name} helps to know which name is being pulled
//katzDeliLine.length know the amount of tickets being pulled

//Now serving
function nowServing(katzDeliLine) {
let i = 0;

while ( i < katzDeliLine.length) {
  i++;
}
if (katzDeliLine.length === 0) {
return "There is nobody waiting to be served!";
}
else
return ("Currently serving ${name}");
}

function currentline(katzDeliLine) {

var katzDeliLine = [];

if (katzDeliLine.length === 0) {
  return "This line is currently empty."
}
