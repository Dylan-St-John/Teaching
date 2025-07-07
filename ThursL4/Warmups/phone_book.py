# What is a dictionary?
# "Something that has keys"
# ""
# WARMUP:
# 1) Create a new project folder called "Warmups" and add
# a new python file to the project called "phone_book.py"

# 2) Create a variable called phone_book. The phone book will be a 
# dictionary that stores someones name and their phone number. Fill
# The phone book up with up to 10 entries.

# 3) Create a function that will look up someones number based
# on the name given to the function.
# EXAMPLE: getNumber("Dylan") --> 3572436019

phone_book = {
    "Dylan": 696945477,
    "Sanvi": 877894126,
    "Ricky": 189357415,
    "Luke": 993312858,
    "Jethro": 997897651,
    "Ashmi": 233454886
}

# print(phone_book['Dylan'])

def getNumber(name):
    return phone_book[name]

name_input = input("Enter a name: ")
print("Your number is: " + str(getNumber(name_input)))
