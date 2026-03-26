import re

def get_movie_night_cost(day, showtime, number_of_tickets):

    price = 0

    if day == "Tuesday":
        price = 5
    else:
        prices = {
            "Monday":10,
            "Wednesday":10,
            "Thursday":10,
            "Friday":12,
            "Saturday":12,
            "Sunday":12
        }
        hour = int(re.search(r"[0-9]+",showtime)[0])
        is_pm = "p" in showtime
        
        matinee = not is_pm or hour == 12 or hour < 5
        matinee_cost = -2 if matinee else 0
        
        
        price = prices[day] + matinee_cost
        print(price)

    return f"${price * number_of_tickets:.2f}"



print(get_movie_night_cost("Saturday", "10:00pm", 1))

'''
Movie Night
Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.

The given day will be one of:

"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
"Sunday"
The showtime will be given in the format "H:MMam" or "H:MMpm". For example "10:00am" or "10:00pm".

Return the total cost in the format "$D.CC" using these rules:

Weekend (Friday - Sunday): $12.00 per ticket.
Weekday (Monday - Thursday): $10.00 per ticket.
Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
Tuesdays: all tickets are $5.00 each.
Tests:
Passed:1. get_movie_night_cost("Saturday", "10:00pm", 1) should return "$12.00".
Passed:2. get_movie_night_cost("Sunday", "10:00am", 1) should return "$10.00".
Passed:3. get_movie_night_cost("Tuesday", "7:20pm", 2) should return "$10.00".
Passed:4. get_movie_night_cost("Wednesday", "5:40pm", 3) should return "$30.00".
Passed:5. get_movie_night_cost("Monday", "11:50am", 4) should return "$32.00".
Passed:6. get_movie_night_cost("Friday", "4:30pm", 5) should return "$50.00".
Passed:7. get_movie_night_cost("Tuesday", "11:30am", 1) should return "$5.00".
'''