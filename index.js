function takeANumber(array, name) {
    array.push(name);
    return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
    if (array.length <= 0) {
        return "There is nobody waiting to be served!";
    }
    return `Currently serving ${array.shift()}.`;
}

function currentLine(array) {
    let str = "";
    if (array.length === 0) {
        return "The line is currently empty.";
    }
    let result = array.map( (name, index) => {
      return ` ${index+1}. ${name}`
    })



    return `The line is currently:${result}`;
}
