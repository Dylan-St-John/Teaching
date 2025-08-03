# WARMUP: Create a dictionary named after your favourite videogame or movie character. 
# The key:value pairs should be information about that character.

# EXAMPLE KEY:VALUE IDEAS: powers, name, hp, description


# 1) What is an object?
# 2) What is OOP?
# 3) What is a class? 

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age
    self.nationality = "American"
  
  def eat(self, food):
    if food == "KFC":
      print("finger lickin good")
    else:
      print(self.name + " doesnt like this food")

  def __str__(self):
    return f"Person named {self.name}"
  
  def __repr__(self):
    return f"Person('{self.name}')"

p1 = Person("John", 36)
p1.age = 72
p2 = Person("Dylan", 26)
p3 = Person("Ricky", 12)

print(p3.nationality)
print(p1.nationality)

p1.eat("sandwich")
p2.eat("KFC")
p3.eat("fast food")

print(repr(p1))

