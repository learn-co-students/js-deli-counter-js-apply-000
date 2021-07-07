const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number '
  + katzDeliLine.length + ' in line.';
};

const nowServing = katzDeliLine => {
  if (katzDeliLine.length < 1) {
    return 'There is nobody waiting to be served!';
  }

  let name = katzDeliLine.shift();

  return `Currently serving ${name}.`;
};

const buildLine = (katzDeliLine) => {
  let phrase = '';
  let length = katzDeliLine.length;
  for (let i = 0; i < length; i += 1) {
    phrase += ' ' + (i + 1) + '. ' + katzDeliLine[i];
    if (i < length -1) phrase += ',';
  };
  return phrase;
};

const currentLine = katzDeliLine => {
  let line = 'The line is currently';

  if (katzDeliLine.length < 1) return line + ' empty.';

  line += ':'
  line += buildLine(katzDeliLine);

  return line;
};
