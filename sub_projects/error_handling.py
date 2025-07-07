# Welcome! Take a look at the code below, starting with #1. 
# What type of error does this produce and why?

# ERROR 1:
# result = 10 / 0  
# print("This will not be printed due to the crash.")
# --> YOU CANNOT DIVIDE BY ZERO

# ERROR 2:
# result = 10 + 5
# print(result) 
# print("This will not be printed due to the crash.")
# --> TYPE ERROR: YOU CANNOT COMBINE THIS TWO THINGS TOGETHER

# ERROR 3:
# print(unknown_variable) 
# print("This will not be printed due to the crash.")
# --> NAME ERROR: WE ARE TALKING ABOUT SOMETHING THE COMPUTER DOESNT KNOW ABOUT

# ERROR 4:
# lst = [1, 2, 3]
# print(lst[5])  
# print("This will not be printed due to the crash.")
# INDEX ERROR (Index out of range)

# ERROR 5:
# d = {"name": "Dylan"}
# print(d["age"]) 
# print("This will not be printed due to the crash.")
# KEY ERROR: This key does not exist 

# ERROR 6: 
# num = int("Hello")  
# print("This will not be printed due to the crash.")
# ValueError - this cannot be converted to this value

# ERROR 7:
# console.log("Hello Console!")
# print("This will not be printed due to the crash.")
# Syntax Error - I didnt write my code correctly



























# EXAMPLE OF TRY / EXCEPT:
import string
# get a list of letters
letters = list(string.ascii_lowercase)
# get letter corresponding to input number
while True:
    answer = input("Enter a number (enter 'stop' to quit): ")
    if answer == "stop":
        break
    try:
        index = int(answer) - 1
        print(letters[index])
    except ValueError:
        print("Not a number.")
    except IndexError:
         print("Index out of bounds. (Try numbers 1-26)")




# Create one similar example similar to the one above! (Think of a scenario when the user could create an error)
# TO WRAP UP: Add error handling to the Text-Based Adventure game you made last class!



















