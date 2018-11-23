"""
This program calculates the area of a various shapes.

Author: Isaac Friedman
"""

print "We're running. I'd rather not be running."

option = raw_input("What shape are we calculating for today? Enter R for rhomboid (including squares, rectangles and parrallelograms), C for Circle and T for Triangle.")

if option == 'C':
  radius = float(raw_input("Enter the radius of your cirlce: "))
  area = 3.14159 * radius**2
  print "The area of your circle is %.2f of whatever unit you were using." % (area)
elif option == 'R':
  print "We currently only support rectangles."
  ss = float(raw_input("Short side."))
  ls = float(raw_input("Long side."))
  area = ls*ss
  print "The area of your rectangle is %.2f of whatever unit you were using." %  (area)
elif option == 'T':
  base = float(raw_input("Enter the base of your triangle: "))
  height = float(raw_input("Enter the height of your triangle: "))
  area = (base*height)/2
  print "The area of your triangle is %.2f of whatever unit you were using." % (area)
else:
	print "Unrecognized input"
print "Goodbye."
