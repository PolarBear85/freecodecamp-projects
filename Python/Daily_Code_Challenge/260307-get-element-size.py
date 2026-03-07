def get_element_size(window_size, element_vw, element_vh):

    dimension = window_size.split(" ")
    print(dimension)
    height = int(element_vh[:-2])
    print(height)
    width = int(element_vw[:-2])

    return f"{round(int(dimension[0])*(width/100))} x {round(int(dimension[2])*(height/100))}"

    return window_size


print(get_element_size("1440 x 900", "100vw", "114vh"))

'''
Element Size

Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.

    The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.

    "vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.

    "vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.

Tests

    Passed: 1. get_element_size("1200 x 800", "50vw", "50vh") should return "600 x 400".
    Passed: 2. get_element_size("320 x 480", "25vw", "50vh") should return "80 x 240".
    Passed: 3. get_element_size("1000 x 500", "7vw", "3vh") should return "70 x 15".
    Passed: 4. get_element_size("1920 x 1080", "95vw", "100vh") should return "1824 x 1080".
    Passed: 5. get_element_size("1200 x 800", "0vw", "0vh") should return "0 x 0".
    Passed: 6. get_element_size("1440 x 900", "100vw", "114vh") should return "1440 x 1026".

'''