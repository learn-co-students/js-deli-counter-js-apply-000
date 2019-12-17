function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}

function nowServing(line) {
  if (Array.isArray(line) && line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  let nextPerson = line.splice(0, 1);
  
  return "Currently serving " + nextPerson[0] + ".";
}

function currentLine(line) {
  if (Array.isArray(line) && line.length === 0) {
    return "The line is currently empty.";
  }
  
  let announcement = "The line is currently: ";
  let count = 0;
  
  for (const element of line) {
    count++
    announcement += count + ". " + element + ", ";
  }
  
  let announcementMinusComma = announcement.slice(0, -2);
  
  return announcementMinusComma;
}