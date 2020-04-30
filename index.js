//function current line
//parameter is line
//length is the number of elements in your array
//console log allows you to put it in the console
var customers = [];
//create a current line function using if and for ; create a variable
function currentLine(line) {
  var linename = [];
  if(!line.length) {
    return "The line is currently empty.";
  }
  //i used .push so that it can add new items at the end of an array and returns
  for (var i = 0; i < line.length; i++) {
    linename.push (" "+ [i + 1] + ". " + line[i]);
  }
  return("The line is currently:"  + linename);
  return "The line is currently:"  + linename.join (", ");
}
//nowServing function
// ! mean not ="removed .length"
function nowServing(serving) {
  if (!serving.length) {
    return("There is nobody waiting to be served!");
  } else {
    return("Currently serving " + serving.shift() + ".");
  }
}
//take a number function
///line is number of people
function takeANumber(numberofpeople, name) {
  numberofpeople.push(name);
 return (
    "Welcome, " +
      name +
      ". You are number " +
      numberofpeople.length +
      " in line."
  );

}

takeANumber(customers, "Ada");
takeANumber(customers, "Grace");
takeANumber(customers, "Matt");
takeANumber(customers, "Kent");
nowServing(customers);
currentLine(customers);
nowServing(customers);
currentLine(customers);
nowServing(customers);
currentLine(customers);
nowServing(customers);
currentLine(customers);
nowServing(customers);
