let katzDeliLine = []

const takeANumber = (katzDeliLine, name) => {
    katzDeliLine.push(name)
    const queueNumber = katzDeliLine.length
    return `Welcome, ${name}. You are number ${queueNumber} in line.`
}

const nowServing = (katzDeliLine) => {
    if (!katzDeliLine.length) {
        return 'There is nobody waiting to be served!'
    } else {
        const currentlyServingName = katzDeliLine.shift()
        return `Currently serving ${currentlyServingName}.`
    }
}

const currentLine = (katzDeliLine) => {
    if (!katzDeliLine.length) {
        return 'The line is currently empty.'
    } else {
      const message = []
      for (let i=0; i<katzDeliLine.length; i++) {
          message.push(`${[i + 1]}. ${katzDeliLine[i]}`)
      }
      return `The line is currently: ${message.join(', ')}`
    }
}
