buttonC = 0

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global buttonC
    basic.show_number(0)
    buttonC = pins.digital_read_pin(DigitalPin.P0)
    pins.digital_write_pin(DigitalPin.P0, 1)
basic.forever(on_forever)
