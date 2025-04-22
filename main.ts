radio.onReceivedNumber(function (receivedNumber) {
    no1 = randint(0, 6)
    no2 = randint(0, 6)
    basic.showNumber(no1)
    basic.showString("x")
    basic.showNumber(no2)
    basic.showString("=")
    basic.clearScreen()
    counter = 0
})
input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    if (counter == no1 * no2) {
        basic.showNumber(no1)
        basic.showString("x")
        basic.showNumber(no2)
        basic.showString("=")
        basic.showNumber(counter)
        radio.sendString("right")
    } else {
        basic.clearScreen()
        basic.showString("wrong")
        radio.sendString("wrong")
    }
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    basic.showNumber(counter)
})
let counter = 0
let no2 = 0
let no1 = 0
radio.setGroup(4)
basic.showString("...")
