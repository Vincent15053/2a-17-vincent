function turnOnLeds () {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, 2)
        basic.pause(waitTime)
    }
}
function turnOffLeds () {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, 2)
    }
}
function blinkleds () {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, 2)
        basic.pause(waitTime)
        led.plot(X, 2)
        basic.pause(waitTime)
    }
}
let waitTime = 0
waitTime = 200
basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, 2)
        basic.pause(waitTime)
        led.plot(X, 2)
        basic.pause(waitTime)
    }
})
basic.forever(function () {
    led.plot(0, 2)
    basic.pause(200)
    led.plot(0, 2)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(4, 2)
    basic.pause(200)
    led.plot(4, 2)
    basic.pause(200)
})
basic.forever(function () {
    blinkleds()
})
