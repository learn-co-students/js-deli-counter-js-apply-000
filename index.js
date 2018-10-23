var katzDeliLine = [];

function takeANumber(arr, name){
    if(arr == undefined){
        arr.push(name)
        return "Welcome, "+name+". You are number 1 in line."
    } else{
        arr.push(name);
        num = arr.length
        return "Welcome, "+name+". You are number "+num+" in line."
    }
    return arr;
}

function nowServing(arr){
    if(arr == undefined){
        return "Nobody is waiting to be served!"
    }
    return "Currently serving, "+arr.shift()+"."
}

function currentLine(arr){
    if(arr[0] == undefined){
        return "The line is currently empty."
    }
    num = 1
    s = " "
    count = 0
    while(count != arr.length){
        s += num+". "+arr[count]+" "
        num++
        count++
    }
    return "The line is currently: "+s;
}

console.log(currentLine(katzDeliLine))
console.log(takeANumber(katzDeliLine, "Greg"))
console.log(takeANumber(katzDeliLine, "Ada"))
console.log(takeANumber(katzDeliLine, "Josh"))
console.log(takeANumber(katzDeliLine, "Jim"))

console.log(currentLine(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(currentLine(katzDeliLine))
