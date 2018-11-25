class BankAccount(object):
  balance = 0
  def show_balance(self):
    print "%.2f" % (self.balance)

  def deposit(self, amount):
    if amount <= 0:
      print "Invalid deposit amount."
      return
    else:
      print "Your deposit of %.2f was successful." % (amount)
      self.balance += amount
      self.show_balance()
      return

  def withdraw(self, amount):
    if amount > self.balance:
      print "This withdrawal will place you in overdraft. Fuck off."
      return
    else:
      print "Your withdrawal of %.2f was successful." % (amount)
      self.balance -= amount
      self.show_balance()
      return

  def __init__(self, name):
    self.name=name

  def __repr__(self):
    return "%s's bank account. Current Balance %.2f" % (self.name, self.balance)

my_account = BankAccount("Isaac Friedman")
print my_account
my_account.show_balance()
my_account.deposit(20000)
my_account.withdraw(1573.216)
print my_account
