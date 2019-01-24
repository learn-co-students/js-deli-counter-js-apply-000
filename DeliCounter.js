var katzDeliLine = [];

function currentLine(x) {
  for (var i = 0; i < x.length; i++) {
    print (i+1 + ". " + x[i]);
    if (i < x.length-1)
      print(", ");
  }
}

function takeANumber(array, name) {
  print("Welcome " + name + " You are number " + array.length+1);
  array.push(name);
}

function nowServing(array) {
  if array.size ==0
    print("There is nobody waiting to be served");

  array.shift();
  print("The line is currently: ");
  currentLine(array);

}

takeANumber(katzDeliLine, "name");

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine), "Grace");
takeANumber(katzDeliLine), "Kent");


nowServing(katzDeliLine);

currentLine(katzDeliLine);

takeANumber(katzDeliLine, "Matz");

currentLine(katzDeliLine);

//nowServing(katzDeliLine); //currently serving Grace

currentLine(katzDeliLine)
