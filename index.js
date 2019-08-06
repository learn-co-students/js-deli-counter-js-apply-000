
var katzDeli= [];
var otherdelli = [];
//takeANumber(katzDeli, "Ada");
//takeANumber(katzDeli, "Grace");
//takeANumber(katzDeli, "Kent");

currentLine(katzDeli);


function takeANumber(line, name) {
        

    line.push(name);
    return "Welcome, " + name + ". You are number " + line.length + " in line.";


}


function nowServing(katzDeliLine) {
  
  var result = "";
  console.log(katzDeliLine.length);
  if (katzDeliLine.length > 0) {
    result = "Currently serving " + katzDeliLine[0] + ".";
  } else {
    result = "There is nobody waiting to be served!";
  }
    katzDeliLine.shift();
  return result;
}


function currentLine(line) {
  var result = "The Line is currently: ";
  var i = 0;

  if (line.length > 0) {
    result = "The line is currently: ";
    for (i = 0; i < line.length; i++) {
      result = result + (i+1) + ". " + line[i] 
      
      if (i +1 < line.length) { result = result +  ", ";}
      console.log(line[i]);
    }

  }
  else {
      result = "The line is currently empty.";
  }
return result;
}
    