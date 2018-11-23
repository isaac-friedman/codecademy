"""
This program provides a command line calendar for users. It:
1- Provides a welcome message
2- Prompts users to view, add, update, or delete events.
3- Carries out the users instructions

By: Isaac Friedman
"""
from time import sleep, strftime

USER_FNAME = "Isaac"
cal = {}

def welcome():
  print "Hello, ", USER_FNAME, "Welcome to RedundoCal!"
  print "The calendar is opening..."
  sleep(1)
  print "Today is: ", strftime("%A %B %d, %Y")
  print strftime("%I:%M:%S %p")
  sleep(1)
  print "What would you like to do?"

def start_calendar():
  welcome()
  start = True
  while start == True:
    selection = raw_input("Enter A to Add, U to Update, V to View, D to Delete X to Exit, anything else to get an error.").upper()
    if selection == 'V':
      #logic to display calendar here
      if len(cal.keys()) >= 1:
        print cal
      else:
        print "There is nothing to display. Get more friends and/or work."
    elif selection == 'A':
      #logic to add event
      event = raw_input("Enter event: ")
      date = raw_input("Enter date (MM/DD/YYYY: ")
      if len(date) != 10 or int(date[6:]) < int(strftime("%Y")):
        "Not a valid date."
        try_again = raw_input("Would you like to try again? Y for Yes, N(ything else) for No.").upper()
        if try_again == 'Y':
          continue
        else:
          start = False
      else:
        cal[date] = event
        print "Date Successfully added!"
        print cal
    elif selection == 'U':
      #logic to change an event
      date_to_change = raw_input("What date? ")
      update = raw_input("Enter the update. ")
      cal[date_to_change] += update
      print cal
    elif selection == 'D':
      #logic to delete an event
      if len(cal.keys())<1:
        print "Calendar is empty"
      else:
        event = raw_input("What event? ")
        for date in cal.keys():
          if cal[date] == event:
            del cal[date]
        print "DELETED!"
        print cal
    elif selection == 'X':
      start == False
    else:
      sleep(.5)
      print "That is not an option. Try again."
start_calendar()
