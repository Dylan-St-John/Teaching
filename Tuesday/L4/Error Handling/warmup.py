# WARMUP: 
# The code below gets a number from the user and returns the letter that corresponds with that number.
# EXAMPLE: User enters 1, program responds with a. User enters 5, program responds with e
# 1) What are the possible errors with this code?
# --> User inputs: letters, numbers not inbetween 0 - 26
# 2) What is the Traceback? What information does the Traceback supply us?
# --> gives you information about how the program ran before it encountered an error
# 3) How can I handle errors in my program (HINT: W3SCHOOLS, Python) ?

import string
letters = list(string.ascii_lowercase)
print(letters)
while True:
    answer = input("Enter a number (enter 'stop' to quit): ")
    if answer == "stop":
        break
    try:
        index = int(answer) - 1
        print(letters[index])
    except ValueError:
        print('Cannot enter a letter. Please enter a number')
    except IndexError:
        print('Please only enter a number between 0 and 26')