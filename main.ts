bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
let y = 0
let x = 0
let NewYAcc = 0
let NewXAcc = 0
basic.showIcon(IconNames.Yes)
mouse.startMouseService()
basic.forever(function () {
    NewXAcc = input.acceleration(Dimension.X)
    NewYAcc = input.acceleration(Dimension.Y)
    mouse.send(
    0.5 * (NewXAcc - x),
    0.5 * (NewYAcc - y),
    input.isGesture(Gesture.Shake),
    false,
    false,
    0,
    false
    )
    x = 0.5 * (x + 0.5 * NewXAcc)
    y = 0.5 * (y + 0.5 * NewYAcc)
})
