Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as "Welcome, Ada. You are number 1 in line.". And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

var Katzdeliline = []

//New Customer
function takeANumber(Katzdeliline, name) {
  
  var newCustomerPosition = Katzdeliline.push(name);
  
  var takenumberwelcomemessage = "Greetings " + name + ", you are number " + newCustomerPosition;
  
  console.log(takenumberwelcomemessage)
  
}