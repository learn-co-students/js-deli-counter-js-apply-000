
function takeANumber(arr, newPerson) {
  arr.push(newPerson);
    return `Welcome, ${newPerson}. You are number ${arr.length} in line.`;
}

function nowServing(arr) {
  if (arr.length) {
    var servingPerson = arr.splice(0, 1);
    return `Currently serving ${servingPerson}.`;
  }else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array) {
  //declare a default string variable
  // var my_string = "The line is currently: "
  if (!array.length) {
    return "The line is currently empty.";
    //return `The line is currently:  ${collecting}`;
    // my_string += "something"
  }else {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
    newArray.push(`${i + 1}. ${array[i]}`);
    }
    return `The line is currently: ${newArray.join(", ")}`;
  }
}
