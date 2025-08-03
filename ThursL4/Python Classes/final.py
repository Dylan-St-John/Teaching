# 1) How would you define an object (in real life)?
# - properties (size, smell, shape)
# - actions (scissor - cut, sunglasses - make you look cool, and help you see better)

# 2) What is OOP?
# - Object Oriented Programming
# --> We create objects that have:
# --> a) properties
# --> b) methods (actions)
# EXAMPLE: Bird
# properties: shape (feathers, wings, beak, eyes), colour, name
# method: fly, call, observe

# 3) What is a class?
class Bird:
    def __init__(self, size, colour, name):
        self.size = size
        self.colour = colour
        self.name = name
        self.canFly = True
    
    def call(self):
        print("CAAAAH")

testBird = Bird(5, "red", "Woodpecker")
testBird.call()

# INHERITANCE

class Crow(Bird):
    def __init__(self, intelligence_level, size, colour, name):
        super().__init__(size, colour, name)
        self.intelligence_level = intelligence_level

testCrow = Crow(10, 4, "black", "Crow")
testCrow.call()

# math, english, computer science, biology, PE
exampleGrades = [91, 89, 83, 86, 97]

class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades
    
    def calculate_gpa(self):
        # return the grade point average of all their grades

# --> create an example student and return their GPA using the 
# calculate_gpa method