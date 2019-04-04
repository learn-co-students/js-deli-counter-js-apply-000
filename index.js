const takeANumber = (line, name) => {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
};

const nowServing = (line) =>  {
    if (line[0]) {
        let output =  `Currently serving ${line[0]}.`;
        line.shift();
        return output;
    }
  return 'There is nobody waiting to be served!';
};

const currentLine = (line) => {
    if (line.length === 0) {return 'The line is currently empty.';}
    let output = 'The line is currently: ';
    for (let i = 0; i < line.length; i++) {
        i === line.length - 1 ? output += `${i + 1}. ${line[i]}`: output += `${i + 1}. ${line[i]}, `;
    }
    return output;
};