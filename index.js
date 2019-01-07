var katzDeliLine = [];

var takeANumber = function(arr, name) {
    arr.push(name);
    return `Welcome, ${name}. You are number ${arr.length} in line.`
}

var nowServing = function(arr) {
    return arr.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${arr.shift()}.`
}

var currentLine = function(arr) {
    var deliLine = []
    for (let i = 1; i <= arr.length; i++) {
        deliLine.push(`${i}. ${arr[i - 1]}`)
    }
    return arr.length === 0 ? "The line is currently empty." : `The line is currently: ${deliLine.join(', ')}`
}
