const isEmptyArray = (array) => (Array.isArray(array)) ? (array.length === 0) ? true : false : false // only returns true when 'array' argument is 1) An array and 2) Equal to Zero in Length

const takeANumber = (currentLine, newPerson) => {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

const nowServing = (arrayOfPeople) => {
  if(isEmptyArray(arrayOfPeople)) return 'There is nobody waiting to be served!'
  const firstPerson = arrayOfPeople.shift();
  return `Currently serving ${firstPerson}.`;
}

const currentLine = (arrayOfPeople) => {
   if(isEmptyArray(arrayOfPeople)) return `The line is currently empty.`;
   return `The line is currently:${arrayOfPeople.map((person, index) => ` ${index+1}. ${person}`)}`;
}
