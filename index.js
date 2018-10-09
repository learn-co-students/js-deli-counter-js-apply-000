function takeANumber(currentLineOfPeople, newPersonsName) {
  currentLineOfPeople.push(newPersonName)
  return (`Welcome, ${newPersonsName}. You are number ${currentLineOfPeople} in line.`)
}
  