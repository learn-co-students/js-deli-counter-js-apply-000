//complaints about the assignment:
//I'd like to see what tests I passed.
//when i hit ctrl + S, it deleted everything.
//insturctions unclear for what to return in takeANumber. I expected to return the line and console.log the message,
//I did not expect to have to mutate the input.

let katzDeliLine = [];

function takeANumber(line){
  const originalLength = line.length; //for use in returning
  //modify input array
  //get names from arguments and iterate on that
    let people = Array.from(arguments);
    people.shift(); // don't want the deli line
    //let allPeople = line.concat(people); Do you want me to mutate the array?
    people.forEach( (person) => {
      line.push(person);
    })

  //iterating on arguments //(I started this way, but it feels clunky);
    // for (let person in arguments){ //check each argument and add to a line if it's a person
    //   if (person !== line){
    //     line.push(person);
    //   }
    // }

  // return message "Welcome, Ada. You are number 1 in line." Also, should be returning the new line.
    let message = people.map( (person, index) => {
      return `Welcome, ${person}. You are number ${originalLength + index + 1} in line.`;
    });
    console.log(message.join("\n"));
    return(message.join("\n"));
    //return allPeople;
}
function currentLine(line){
  // return message "The line is currently: 1. Ada, 2. Grace, 3. Kent"
  // or "The line is currently empty."
  let message = "";
  if (line.length === 0){
    message = "The line is currently empty.";
  }
  else{
    //spread operator is confusing since this code had a Syntax Error, lets just iterate with a forEach
    // message = `The line is currently: ${...line.map( (name, index) => {
    //       return `${index + 1}. ${name}${index + 1 === line.length ? "" : ", "}`; // tack on punctuation unless last person
    //     })}`

    message = `The line is currently: `;
    line.forEach( (name, index) => {
      message += `${index + 1}. ${name}${index + 1 === line.length ? "" : ", "}`; // tack on punctuation unless last person
    });
  }
  return message;
}
function nowServing(line){
  //modify input
  let customer = line.shift();
  // return message "Currently serving Grace."
  // or "There is nobody in line waiting to be served!"
  return customer === undefined ? "There is nobody waiting to be served!" : `Currently serving ${customer}.`;
}
