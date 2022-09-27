let buttonC = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    buttonC = pins.digitalReadPin(DigitalPin.P0)
    pins.digitalWritePin(DigitalPin.P1, buttonC)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, buttonC)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P5, buttonC)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # # # # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.clearScreen()
})
