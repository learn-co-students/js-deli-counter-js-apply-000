var katzDeli = [];

fucntion takeANumber(katzDeli,customerName){
  katzDeli.push(customerName);
  return "Welcome, " + customerName + "you are number" + katzDeli.length+1 + "in line.";
}
