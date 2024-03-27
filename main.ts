radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function on_logo_long_pressed() {
    radio.sendNumber(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    radio.sendNumber(0)
})
basic.forever(function on_forever() {
    
})
