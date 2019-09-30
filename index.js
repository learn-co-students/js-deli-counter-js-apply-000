// ==================== 1 =====================

var newPerson = [];
var people = ["Leo", "Mary"];

function takeANumber (people, newPerson) {
  people.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${people.length} in line.`;
}

// =================== 2 ======================

 function nowServing (people) {
   
  if (people.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var newCustomer = people.shift(0);
    return "Currently serving " + newCustomer + ".";
  }
}

// =================== 3 ===================

function currentLine (people) {
  if (people.length === 0) {
    return "The line is currently empty.";
  } 
  var string = [];
  for (var i = 0; i < people.length; i++) {
    string.push(`${i+1}. ${people[i]}`);
  }
  return "The line is currently: " + string.join(", ");
}