
function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length +
  " in line."
}
takeANumber(katzDeli, "Ada")
