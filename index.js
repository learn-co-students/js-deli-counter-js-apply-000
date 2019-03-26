function takeANumber(i,name) {
  var output = []
  for(var i = 1;i<name.length;i++) {
      output.push("Welcome, " + name + ". You are number" + i + "in line.")
  }
  return output
}
