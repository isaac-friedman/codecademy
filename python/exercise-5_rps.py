"""
Rock Paper Scissors game
"""

from random import randint
moves = ["ROCK", "PAPER", "SCISSORS"]
message = {"tie":"Yawn it's a tie!", "won":"Yay you won!", "lost":"Aww you lost"}

def decide_winner(user_choice, confuser_choice):
  print user_choice
  print confuser_choice
  if user_choice == confuser_choice:
    print message["tie"]
  elif user_choice == moves[0] and confuser_choice == moves[2]:
    print message["won"]
  elif user_choice == moves[1] and confuser_choice == moves[0]:
    print message["won"]
  elif user_choice == moves[2] and confuser_choice == moves[1]:
    print message["won"]
  else:
    print message["lost"]

def play_RPS():
  user_choice = raw_input("ROCK PAPER SCISSORS SAYS TYPE YOUR CHOICE IN ALL CAPS: ")
  confuser_choice = moves[randint(0,2)]
  decide_winner(user_choice, confuser_choice)
  return

play_RPS()
