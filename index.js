// Code your solutions in this file
const messageNames = [];

function writeCards(names, value) {
    for (let i = 0; i < names.length; i++) {
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
    return messageNames
}

function countDown(number) {
    let value = number
    while (value >= 0) {
        console.log(value--);
    }
    return number;
}