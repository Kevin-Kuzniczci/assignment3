let coinFlip

let loopyThing = prompt('How many iterations?')

for (let i = 0; i < loopyThing; i++) {
    coinFlip = Math.round(Math.random())
    if (coinFlip == 0) {
        document.write('Heads')
    } else if (coinFlip == 1) {
        document.write('Tails')
    } else {
        document.write('Error...?')
    }
}