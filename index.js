var katzDeli = [];

function takeANumber(katzDeli, customer) {
  var position = katzDeli.length + 1;
  katzDeli.push(customer);
  return "Welcome, " + customer + ". You are number " + position + " in line.";
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var nextCustomer = katzDeli[0];
  katzDeli.shift();
  return "Currently serving " + nextCustomer + "."
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  var list = "";
  var counter = 1;
  for (var i = 0; i < katzDeli.length; i++) {
    var customer = katzDeli[i];
    list += counter + ". " + customer + ", ";
    counter++;
  }
  list = list.slice(0, list.length - 2);
  return "The line is currently: " + list;
}
