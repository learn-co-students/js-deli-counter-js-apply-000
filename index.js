const takeANumber = (currentKatzLine, name) => {
  currentKatzLine.push(name);
  return `Welcome, ${name}. You are number ${1+ currentKatzLine.indexOf(name)} in line.`;
}

const nowServing = currentKatzLine => {
  if (currentKatzLine.length > 0) {
    return `Currently serving ${currentKatzLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

const currentLine = currentKatzLine => {
    if (currentKatzLine.length > 0) {
      let namesAndNumbers = [];
        let i;
        for (i=0; i < currentKatzLine.length; i++) {
           namesAndNumbers.push(` ${i+1}. ${currentKatzLine[i]}`);
        }
      return `The line is currently:${namesAndNumbers.toString()}`
  } else {
      return "The line is currently empty."
  }
}
