var noSoupForYou = [];

function takeANumber(arr, name) {
  //handle edge cases
    if (!name) { return "Please provide a name for us to call you to the counter." };
    if (name === "Elaine") {
        //console.log("No soup for You!");
        return "No soup for You!";
    }
  //add names to line
    arr.push(name);
  //return actual place in line: NOT index
    var placeInLine = arr.indexOf(name) + 1;
    return `Welcome, ${name}. You are number ${placeInLine} in line.`;
}

function currentLine(arr) {
  //handle edge cases
    if (arr.length > 0 === false) {
        return "The line is currently empty.";
    }
  //initialize return variable
    var returnStr = "The line is currently: ";
  //build line ${place}/${name}...
    arr.forEach(function (name) {
        var placeInLine = arr.indexOf(name) + 1;
        returnStr += `${placeInLine}. ${name}, `
    })
  //return output sans trailing ","
    return returnStr.split('').slice(0, returnStr.length - 2).join('');
}

function nowServing(arr) {
  //handle edge case
    if (arr.length > 0 === false) {
        return "There is nobody waiting to be served!";
    }
  //shift() first element off array and return
    var currentCustomer = arr.shift();
    return `Currently serving ${currentCustomer}.`;
}
