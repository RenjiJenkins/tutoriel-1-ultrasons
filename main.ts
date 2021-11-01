let distance = 0
basic.forever(function on_forever() {
    
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
    if (distance < 10) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
    
})
