var katzDeli = [];

var takeANumber = function (katzDeliLine, customerName) {
	katzDeliLine.push(customerName);
	return(`Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`)
}

takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");


var nowServing = function (katzDeliLine) {
	if (katzDeliLine.length === 0) {
		return("There is nobody waiting to be served!") }

	var nowServingCustomer = katzDeliLine[0];
	katzDeliLine.shift();
	return(`Currently serving ${nowServingCustomer}.`);
}

nowServing(katzDeli);

var currentLine = function (katzDeliLine) {
var line = [];
var i = 0;

	while (i < katzDeliLine.length) {
		line.push(' ' + [i+1] + '. ' + katzDeliLine[i]) // 
		i++;
	}
	if (katzDeliLine.length === 0) { 
	  
		return "The line is currently empty.";
	} 
	return(`The line is currently:` + line);
}