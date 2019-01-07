const takeANumber = (line, name) => {
 line.push(name);
 return `Welcome, ${name}. You are number ${line.length} in line.`
};

const nowServing = line => {
  if ( !line.length ) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
};

const currentLine = line => {
  if ( !line.length ) {
    return "The line is currently empty.";
  } else {
    var message = "The line is currently: ";

    line.forEach( (person, i) => {
      message += `${i + 1}. ${person}`;
      if ( i < line.length - 1 ) {
        message += ", ";
      }
    });

    return message;
  }
}
