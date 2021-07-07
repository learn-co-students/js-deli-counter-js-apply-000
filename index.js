var katzDeliLine = [];

function takeANumber(arr, name) {
  arr.push(name);
  return 'Welcome, ' + name + '. You are number ' + arr.length + ' in line.'
}


function currentLine(arr) {
    if (arr.length === 0) {
        return 'The line is currently empty.';
    }

    return 'The line is currently: ' + arr.map((person, index) => '' + (index + 1) + '. ' + person)
                                         .join(', ');
}

currentLine(katzDeliLine)

function nowServing(arr) {
    if (arr.length === 0) {
        return 'There is nobody waiting to be served!';
    }

    return ("Currently serving " + arr.shift()+ ".");
}
