var katzDeli = [];

function takeANumber(katzDeliLine,name){
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
    //"Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  }

function nowServing(katzDeliLine){
      var katz;
      if (katzDeliLine.length === 0) {
        katz = "There is nobody waiting to be served!"
      }
      else {
        katz = `Currently serving ${katzDeliLine.shift(1)}.`;
      }

    return katz;
}

function currentLine(katzDeliLine){
    var katz;
    if (katzDeliLine.length === 0) {
        katz = "The line is currently empty.";
    }
    else {
      var array = [];
      var count = 1;

      for (var i = 0; i < katzDeliLine.length; i++) {
          array.push(`${count++}. ${katzDeliLine[i]}`);
      }

        katz = `The line is currently: ${array.join(", ")}`;
    }

    return katz;
}