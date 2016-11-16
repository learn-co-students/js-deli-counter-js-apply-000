
function takeANumber (katzDeliLine, new_name) {

  katzDeliLine.push(new_name);

  return 'Welcome, ' + new_name + '. You are number ' + (katzDeliLine.length) +
   ' in line.';

}

function nowServing (katzDeliLine) {

  if (katzDeliLine.length > 0) {
    var now_person = katzDeliLine[0];
    katzDeliLine.shift();

    return "Currently serving " + now_person + ".";

  } else {
    return "There is nobody waiting to be served!";
  }

}

function currentLine (katzDeliLine) {
  var ret_string = "The line is currently: ";

  if (katzDeliLine.length > 0) {

    for (var i = 0; i < katzDeliLine.length; i++) {
      ret_string += (i + 1) + '. ' + katzDeliLine[i] + ', ';
//      if (i < (katzDeliLine.length - 1)) {
//        ret_string += ', ';
//      };

    }



    return ret_string.substring(0, ret_string.length - 2);

  } else {
    return "The line is currently empty.";
  }
}
