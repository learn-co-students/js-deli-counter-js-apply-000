var katzDeli = [];

//Add new customers to line and greet customers
function takeANumber(katzDeliLine, name) {
	katzDeliLine.push(name);
	return (
		'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
	);
}

//test takeANumber
function testTakeANumber() {
	katzDeli = ['Farah', 'Sami', 'Summer'];
	var response = takeANumber(katzDeli, 'Mimi');
	var expectedResponse = 'Welcome, Mimi. You are number 4 in line.';
	return expectedResponse === response && katzDeli.length === 4;
}

//Indicate which customer you will be serving
function nowServing(katzDeliLine) {
	if (katzDeliLine.length === 0) {
		return 'There is nobody waiting to be served!';
	} else {
		return 'Currently serving ' + katzDeliLine.shift() + '.';
	}
}

//test nowServing
function testNowServingWithPeopleOnLine() {
  katzDeli = ['Farah', 'Sami', 'Summer','Mimi'];
  var response = nowServing(katzDeli);
  var expectedResponse = "Currently serving Farah.";
  return response === expectedResponse;
}
function testNowServingWithNoPeopleOnLine() {
  katzDeli = [];
  var response = nowServing(katzDeli);
  var expectedResponse = "There is nobody waiting to be served!";
  return response === expectedResponse;
}

//Return the current line
function currentLine(katzDeliLine) {
	// the current Line function will check if the array KatzDeliLine has a lenght of zero, which means its empty. if it is, it will return the string "The Line is currently empty. Otherwise, it will iterate over the array so that it can create a new array of strings that represents the pieces of the text that describes who's on the line.
	if (katzDeliLine.length === 0) {
		return 'The line is currently empty.';
	} else {
		var currentLineStrings = [];
		for (var i = 0; i < katzDeliLine.length; i++) {
			currentLineStrings.push(i + 1 + '. ' + katzDeliLine[i]);
		}
		return 'The line is currently: ' + currentLineStrings.join(', ');
	}
}

function testCurrentLineWithPeopleOnLine(){
  katzDeli = ["Mimi","Farah"];
  var response = currentLine(katzDeli);
  var expectedResponse = "The line is currently: 1. Mimi, 2. Farah";
  return expectedResponse === response;
}

function testCurrentLineWithNoPeopleOnLine(){
  katzDeli = [];
  var response = currentLine(katzDeli);
  var expectedResponse = "The line is currently empty.";
  return expectedResponse === response;
}

function testAll(){
console.log("testCurrentLineWithNoPeopleOnLine() = ", testCurrentLineWithNoPeopleOnLine());
console.log("testCurrentLineWithPeopleOnLine() = ", testCurrentLineWithPeopleOnLine());
console.log("testTakeANumber() = ",testTakeANumber());
console.log("testNowServingWithNoPeopleOnLine() = ",testNowServingWithNoPeopleOnLine());
console.log("testNowServingWithPeopleOnLine() = ",testNowServingWithPeopleOnLine());
}
