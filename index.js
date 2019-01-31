function takeANumber(lineOfPeople, name) {
    lineOfPeople.push(name);
    var msg = 'Welcome, ' + name + ". You are number " + lineOfPeople.length + " in line.";
    return msg;
}


function nowServing(lineOfPeople) {
    if (lineOfPeople.length === 0) {
        return "There is nobody waiting to be served!";
    } else {
        return "Currently serving " + lineOfPeople.shift() + ".";  
    }
}


function currentLine(lineOfPeople) {
    var listOfCustomers = '';
    if (lineOfPeople.length > 0) {
        for (var i = 0; i < lineOfPeople.length; i++) {
            if (listOfCustomers !== '') {
                listOfCustomers = listOfCustomers + ', '
            }
            listOfCustomers = listOfCustomers + [i + 1].toString() + '. ' + lineOfPeople[i];
        }
        return "The line is currently: " + listOfCustomers;
    } else {
        return "The line is currently empty.";
    }
}