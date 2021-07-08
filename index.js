let counter = 0;

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let position = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

// See NEW SCENARIO below
function takeANumber_v2(katzDeliLine) {
  // katzDeliLine = []
  katzDeliLine.push(++counter);
  return "Welcome, you are number " + counter + ".";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  let res = "The line is currently: ";
  if (katzDeliLine.length > 0) {
    // The line is currently: 1. Ada, 2. Grace
    for (var i = 0; i < katzDeliLine.length; i++) {
      let person = katzDeliLine[i];
      let position = i + 1;
      let str = position + ". " + person +  ", ";
      res += str;
    }
  } else {
    return "The line is currently empty.";
  }
  return res.substring(0, res.length - 2);
}
/*

NEW SCENARIO as part of Flatiron Technical Assessment with Will Ley held on 3/27/19.

Current State: Customers have to give name before take place in line
Target State: instead of them giving name, give them a number, like at the butcher shop. 
              First person is assigned number 1 and takeANumber_v2() returns "welcome, you are number 1."
              Second person is assigned number 2 and takeANumber_v2() returns "welcome, you are number 2."
              52nd person is assigned number 52 and takeANumber_v2() returns "welcome, you are number 52."   


// person 1 walks in, takes number, and places order
// person 2 walks in, takes number, and places order
// person 1's order completes, now serving executes
// person 3 walks in, takes number (x) ... what does the number say?

//1 takeANumber_v2(), [] -> [1]
//2 takeANumber_v2(), [1] -> [1, 2]
//1 order completes, nowServing() [1, 2] -> [2]
//3 takeANumber_v2() [2] -> [2, 2] WRONG, [2] -> [2, 3] CORRECT

// customer 52 of the day, lull, takeAnumber should now return 53
// use a global variable to keep track of state, e.g. counter

*/
