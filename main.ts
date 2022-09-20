input.onButtonPressed(Button.A, function () {
    radio.sendString(poop_emoji)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == poop_emoji) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . #
            . # . # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(poop_emoji)
})
let poop_emoji = ""
poop_emoji = "poop emoji "
radio.setGroup(77)
let animate_poop_emoji = "animatePoopEmoji "
basic.forever(function () {
	
})
