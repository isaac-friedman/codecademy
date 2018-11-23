"""
This program rolls a pair of random virtual dice and asks you to guess the sum.
You win a no-prize if you do.

Author: Isaac Friedman
"""

from random import randint
from time import sleep

def get_user_guess():
  guess = int(raw_input("Guess a number. You know it's dice so don't do anything stupid like guessing a decimal. Negative numbers are right out! "))
  return guess

def roll_dice(sides):
  first_roll = randint(1, sides)
  second_roll = randint(1, sides)
  max_val = 2*sides
  print "Value cannot be highter than %d" % (max_val)
  guess = get_user_guess()
  if guess > max_val or type(guess) is not int or guess < 1:
    print "Don't be silly!"
  else:
    print "Rolling..."
    sleep(2)
    print "The first roll is... %d" % (first_roll)
    sleep(1)
    print "The second roll is... %d" % (second_roll)
    sleep(1)
    print "Total: %d" % (first_roll + second_roll)
    sleep(1)
    if first_roll + second_roll == guess:
      print "You win!!"
    else:
      print "You lose! Yayy!!!"
    return

roll_dice(20)
