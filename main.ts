blockytalky.onReceivedNumber(function (key, value) {
    if (key == "recul" && key == "recul") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, value * 2.55)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, value * 2.55)
        basic.showIcon(IconNames.Yes)
    }
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
basic.showIcon(IconNames.Happy)
