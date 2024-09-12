input.onButtonPressed(Button.A, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    basic.showIcon(IconNames.Triangle)
})
input.onButtonPressed(Button.B, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
