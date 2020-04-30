function takeANumber(line, name){
    line.push(name)
    for (let i = 0; i < line.length; i++) {
        return `Welcome, ${name}. You are number ${line.length} in line.`
    }
}

nowServing = (line) => {
    if(line.length > 0 ){
        return `Currently serving ${line.shift()}.`
    }else{
        return 'There is nobody waiting to be served!'
    }
}

function currentLine(line){
    if(!line.length){
        return 'The line is currently empty.'   
    }

    const namesAndNums = []

    for (let i = 0; i < line.length; i++){
        namesAndNums.push(`${i+1}. ${line[i]}`)
    }

    return `The line is currently: ${namesAndNums.join(', ')}`
}