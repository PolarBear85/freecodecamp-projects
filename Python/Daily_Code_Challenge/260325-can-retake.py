import datetime

def can_retake(finish_time, current_time):

    current = datetime.datetime.fromisoformat(current_time)
    finish = datetime.datetime.fromisoformat(finish_time)
    delta = (current-finish).total_seconds()
    hours_calc = 3600
    hours_diff = delta / hours_calc


    return True if hours_diff >= 48 else False


can_retake("2026-03-23T09:25:00", "2026-03-25T09:25:00")

'''
Cooldown Time
Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.

Both timestamps will be given the format: "YYYY-MM-DDTHH:MM:SS", for example "2026-03-25T14:00:00". Note that the time is 24-hour clock.
A user must wait at least 48 hours before retaking an exam.
Tests:
Passed:1. can_retake("2026-03-23T08:00:00", "2026-03-25T14:00:00") should return True.
Passed:2. can_retake("2026-03-24T14:00:00", "2026-03-25T10:00:00") should return False.
Passed:3. can_retake("2026-03-23T09:25:00", "2026-03-25T09:25:00") should return True.
Passed:4. can_retake("2026-03-25T11:50:00", "2026-03-23T11:49:59") should return False.
'''