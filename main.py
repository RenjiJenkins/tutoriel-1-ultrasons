distance = 0

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS)
    if distance < 10:
        basic.show_icon(IconNames.NO)
    else:
        basic.show_icon(IconNames.YES)
basic.forever(on_forever)
