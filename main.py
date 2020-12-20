def on_button_pressed_a():
    global Timer
    Timer += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Countdown
    Countdown = True
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Timer
    Timer += 60
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global Timer, Countdown
    Timer = 0
    Countdown = False
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Countdown = False
Timer = 0
Timer = 0
Countdown = False

def on_forever():
    global Timer, Countdown
    basic.pause(1000)
    basic.show_number(Timer)
    if Countdown == True:
        basic.show_number(Timer)
        basic.pause(5000)
        Timer += -1
        if Timer <= 0:
            Countdown = False
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.DOUBLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.DOUBLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(392, music.beat(BeatFraction.WHOLE))
            music.play_tone(262, music.beat(BeatFraction.DOUBLE))
            music.play_tone(294, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(349, music.beat(BeatFraction.WHOLE))
            music.play_tone(349, music.beat(BeatFraction.WHOLE))
            music.play_tone(349, music.beat(BeatFraction.WHOLE))
            music.play_tone(349, music.beat(BeatFraction.WHOLE))
            music.play_tone(349, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(330, music.beat(BeatFraction.WHOLE))
            music.play_tone(392, music.beat(BeatFraction.WHOLE))
            music.play_tone(392, music.beat(BeatFraction.WHOLE))
            music.play_tone(349, music.beat(BeatFraction.WHOLE))
            music.play_tone(294, music.beat(BeatFraction.WHOLE))
            music.play_tone(262, music.beat(BeatFraction.WHOLE))
basic.forever(on_forever)
