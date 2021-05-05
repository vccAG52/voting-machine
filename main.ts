input.onButtonPressed(Button.A, function () {
    if (Press_a_button_Once == 0) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.No)
        Press_a_button_Once += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Press_a_button_Once == 0) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.Yes)
        Press_a_button_Once += 1
    }
})
let Press_a_button_Once = 0
Press_a_button_Once = 0
radio.setGroup(562)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
