function takeANumber(line, name){
let placeInLine = line.length + 1;
let output = `Welcome, ${name}. You are number ${placeInLine} in line.`;
line.push(name);
return output
}


function nowServing(line){
  let firstPerson
  if (line.length > 0) {
    firstPerson = line[0]
    line.splice(0, 1)
    return `Currently serving ${firstPerson}.`}
  else {
  	return 'There is nobody waiting to be served!'
  }

}

function currentLine(line){
  let output;
  if (line.length === 0) {
    output = `The line is currently empty.`
  }
  else {
    for (let i =0;i<line.length;i++){
      if (i===0){
        output = `The line is currently: ${i+1}. ${line[i]}`}
        else {
          output = (output + ", " + (i+1) + ". " + line[i])
        }
      }
    }
    return output
  }

