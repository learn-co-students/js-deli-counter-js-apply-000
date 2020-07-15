const takeANumber = (line, person) => {
  line.push(person)
  return (`Welcome, ${person}. You are number ${line.length} in line.`)
}


const nowServing = (line) => {
  if (line.length > 0)
    return `Currently serving ${line.shift()}.`
  else
    return "There is nobody waiting to be served!"
}

const currentLine = (line) => {
  if (line.length === 0) {
    return ("The line is currently empty.")
  } else {
    let names = ""
    for (let [name, i] of line) {
      console.log(name)
      debugger
      names = ` ${i}. ${name}`
    }
    return `The line is currently: ${names}`
  }
}

// currentLine([""])










































// function takeANumber(line, name) {
//   line.push(name);
//   return "Welcome, " + name + ". You are number " + line.length + " in line.";
// }

// function nowServing (line) {
//   if (line.length >= 1 ) {
//     return "Currently serving " + line.shift() + ".";
//   } else {
//     return "There is nobody waiting to be served!";
//   }
// }

// function currentLine (line) {
//   if (line.length >= 1 ) {
//     var statement = "The line is currently: ";
//     for (var i = 0; i < line.length; i++) {
//       var place = i+1; 
//       var separator = (place == line.length) ? "" : ", "; // no comma for last place
//       statement += place.toString() + ". " + line[i] + separator;
//     }
//     return statement;
//   } else {
//     return "The line is currently empty.";
//   }
// }