def rgb_hex():
  invalid = "ERRROR! Check your input! If you're using this project to do your conversion you don't deserve helpful messages."
  r = int(raw_input("Red Value: "))
  if r < 0 or r > 255:
    print invalid
    return
  g = int(raw_input("Green Value: "))
  if g < 0 or g > 255:
    print invalid
    return
  b = int(raw_input("Blue Value: "))
  if b < 0 or b > 255:
    print invalid
    return
  val = (r << 16) + (g << 8) + b
  print (hex(val)[2:]).upper()

def hex_rgb():
  hex_val = raw_input("Hex me! ")
  if len(hex_val) != 6:
    print "Bad value."
    return
  else:
    hex_val = int(hex_val, 16)
    double_hex = 2**8
    b = hex_val % double_hex
    hex_val >> 8
    g = hex_val % double_hex
    hex_val >> 8
    r = hex_val % double_hex
    print r, g, b


def convert():
  while True:
    option = raw_input("1 to convert rgb to hex, 2 for the reverse 3 to exit.")
    if option == "1":
      rgb_hex()
    elif option == "2":
      hex_rgb()
    elif option == "3":
      break
    else:
      print "Bad input!"

convert()
