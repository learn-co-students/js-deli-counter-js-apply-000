let katzDeli = [];

let takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${(katzDeliLine.indexOf(name) + 1)} in line.`;
}

let nowServing = katzDeliLine => {

  return (katzDeliLine.length <= 0 ? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.shift()}.`)

}




let currentLine = katzDeliLine => {
  let sentence = "The line is currently: "
  if (katzDeliLine.length <= 0) {

    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {

      if (i === ((katzDeliLine.length) - 1)) {
        sentence += `${i + 1}. ${katzDeliLine[i]}`;
      } else {
        sentence += `${i + 1}. ${katzDeliLine[i]}, `;
      }
    }
  }

  return sentence;

}
