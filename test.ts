// tests go here; this will not be compiled when this package is used as a library
if (CrocoKit_Input.Button(DigitalPin.P1, CrocoKit_Input.enButton.Press)) {
    basic.showIcon(IconNames.Heart)
}