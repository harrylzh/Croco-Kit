{
// vscode://vscode.github-authentication/did-authenticate?windowid=1&code=d9b99a30ff24a6454e4b&state=0f77043a-9c80-4e8f-bc60-615c64cce649
    // 测试按钮驱动
    if (CrocoKit_Input.Button(DigitalPin.P1, CrocoKit_Input.enButton.Press)) {
        basic.showIcon(IconNames.Heart)
    }

    //高电位测试
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)//初始设置高电位,当按钮按下是通电为低电位
    // pins.analogReadPin(AnalogPin.P1)//是否可以模拟读?
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        soundExpression.hello.play()
    }


    //低电位测试
    pins.setPull(DigitalPin.P1, PinPullMode.PullDown)//初始设置低电位,当按钮按下是通电为低电位
    // pins.analogReadPin(AnalogPin.P1)//是否可以模拟读?
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {//所以一直都是低电位，就一直响
        soundExpression.hello.play()
    }

    //零电位测试
    pins.setPull(DigitalPin.P1, PinPullMode.PullNone)//初始设置0电位,当按钮按下是通电为低电位
    // pins.analogReadPin(AnalogPin.P1)//是否可以模拟读?
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {//还是按下去的时候响哦
        soundExpression.hello.play()
    }


}