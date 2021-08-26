{
    // vscode://vscode.github-authentication/did-authenticate?windowid=1&code=d9b99a30ff24a6454e4b&state=0f77043a-9c80-4e8f-bc60-615c64cce649

    /**测试按钮驱动--------------------------------------------- */
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

    /**测试RGB灯 */
    CrocoKit_Display.RGB2(
        DigitalPin.P0,
        DigitalPin.P1,
        DigitalPin.P2,
        CrocoKit_Display.enColor.Red
    )


    //设置红色灯光 RGB
    pins.digitalWritePin(DigitalPin.P0, 1);//R
    pins.digitalWritePin(DigitalPin.P1, 0);//G
    pins.digitalWritePin(DigitalPin.P2, 0);//B

    //设置绿色灯光 RGB
    pins.digitalWritePin(DigitalPin.P0, 0);//R
    pins.digitalWritePin(DigitalPin.P1, 1);//G
    pins.digitalWritePin(DigitalPin.P2, 0);//B


    /**测试电位器 */
    if (CrocoKit_Input.Potentiometer(AnalogPin.P0) == 0) {

    }

    //读取电位器数值
    let value: number;
    value = pins.analogReadPin(AnalogPin.P0);//模拟读取方式

    /**测试顔色传感器 */
    basic.showNumber(CrocoKit_Sensor.GetRGBValue(CrocoKit_Sensor.enGetRGB.GetValueR))


    //测试顔色传感器
    const COLOR_ADD = 0X53;
    const COLOR_REG = 0x00;
    const COLOR_R = 0X10;
    const COLOR_G = 0X0D;
    const COLOR_B = 0x13;

    // i2cWriteData(COLOR_ADD, COLOR_REG, 0X06);//设置i2c的地址和寄存器
    let buf = pins.createBuffer(2);
    buf[0] = COLOR_REG;
    buf[1] = 0X06;
    pins.i2cWriteBuffer(COLOR_ADD, buf);

    // i2cWriteData(COLOR_ADD, 0X04, 0X41);//这是干嘛？
    // i2cWriteData(COLOR_ADD, 0x05, 0x01);//
}
