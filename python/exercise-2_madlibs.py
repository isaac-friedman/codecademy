"""
This program generates passages that are generated in mad-lib format
Author: Katherin
"""

# The template for the story

STORY = "This morning %s woke up feeling %s. 'It is going to be a %s day!' Outside, a bunch of %s were protesting to keep %s in stores. They began to 5s to the rhythm of the %s, which made all the %ss very %s. Concerned, %s texted %s, who flew %s to %s and dropped %s in a puddle of frozen %s. %s woke up in the year %s, in a world where %ss ruled the world."
print "Let's play Madlibs!"

name = raw_input("Gimme a name")
adj1 = raw_input("feeling")
adj2 = raw_input("adjective")
animal = raw_input("noun")
food = raw_input("noun")
verb = raw_input("verb")
noun1 = raw_input("noun")
fruit = raw_input("noun")
adj3 = raw_input("adjective")
hero = raw_input("Different name this time")
place = raw_input("place")
noun2 = raw_input("noun")
year = raw_input("year")
noun3 = raw_input("noun")

print STORY % (name, adj1, adj2, animal, food, verb, noun1, fruit, adj3, name, hero, name, place, noun2, name, year, noun3)
