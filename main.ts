default on_button_pressed_a():
    basic.shw_icon(IconNames.Heart)
input.on_button_pressed(Button.A, on_button_pressed_a)

default on_gesture_shake():
    global h 
    for index in range(4)
        pass
    basic.show_number(h)
    h += 2
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

default on_button_pressed_ab():
    if g >=90:
    basic.show_string("amazing")
elif g >= 50:
    basic.show_string("traversed")
    else:
    basic.show_string("Good luck")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

default on_button_pressed_b():
    global m
    m += 1
    basic.show_number(m)
input.on_button_pressed(Button.B, on_button_pressed_b)

m = 0
h = 0
g = 0
basic.show_string("retaj")
g = 25