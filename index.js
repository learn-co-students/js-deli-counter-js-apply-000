var katzDeliLine = []

function currentLine(katzDeliLine){

    if(katzDeliLine.length < 1){
        return "The line is currently empty."
    }
    var namesAndNums = []

    for (var i = 0; i < katzDeliLine.length; i += 1 ){
        var name = katzDeliLine[i];
        namesAndNums.push((i + 1) + '. ' + name);
    }
    console.log('The line is currently: ' + nameAndNums)
    return 'The line is currently: ' + nameAndNums.join(', ');
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length > 0){
        return 'Currently serving' + katzDeliLine.shift() + '.'
    }else{
        return 'There is nobody waiting to be served!'
    }

}

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
    var welcomeMessage = 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}