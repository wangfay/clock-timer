input.onButtonPressed(Button.A, function () {
    Timer += 30
})
input.onButtonPressed(Button.AB, function () {
    Countdown = true
})
input.onButtonPressed(Button.B, function () {
    Timer += 60
})
input.onPinPressed(TouchPin.P1, function () {
    Timer = 0
    Countdown = false
})
let Countdown = false
let Timer = 0
Timer = 0
Countdown = false
basic.forever(function () {
    basic.showNumber(Timer)
    if (Countdown == true) {
        basic.showNumber(Timer)
        basic.pause(60000)
        Timer += -1
        if (Timer <= 0) {
            Countdown = false
            basic.showNumber(Timer)
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(466, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
        }
    }
})
