var katzDeliLine = [];

function takeANumber(katzDeliLine, name){

    katzDeliLine.push(name);
    var index = 0;
    var linePosition;

    while (index < katzDeliLine.length){
      if(katzDeliLine[index] == name) {
        linePosition = index + 1;
      }
      index++;
    }

    return "Welcome, " + name + ". You are number " + linePosition + " in line.";
}

function nowServing(katzDeliLine){

    if (katzDeliLine.length > 0) {
        var personServed = katzDeliLine[0];
        katzDeliLine.shift();
        return "Currently serving " + personServed + ".";
    } else {
        return "There is nobody waiting to be served!";
    }
}

function currentLine(katzDeliLine){
    var index;

        if(katzDeliLine.length === 0){
          return "The line is currently empty."
        }else {
          var personLine = [];
          for (index = 0; index < katzDeliLine.length; index++) {
              if(index === 0){
                  personLine.push(index + 1 + ". " + katzDeliLine[index]);
              } else {
                  personLine.push(" " + (index + 1) + ". " + katzDeliLine[index]);
              }
        }
        return "The line is currently: " + personLine.toString();
    }
}
