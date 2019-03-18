const takeANumber = (line, name) => {
  let res = ("Welcome, " + name + ". You are number " + (line.length + 1) + " in line.");
  line.push(name);
  return res;
}

const nowServing = line => {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  let firstInLine = line[0];
  line.shift();
  return "Currently serving " + firstInLine + ".";
}

const currentLine = line => {
    if (line.length === 0) {
     return "The line is currently empty."
   }

   let lineArray = ["The line is currently: "];
   for (let i=0; i<line.length - 1; i++) {
        lineArray.push((i + 1) + ". " + line[i] + ', ')
    }
    lineArray.push(line.length + ". " + line[line.length - 1])

   return lineArray.join("");
 }
