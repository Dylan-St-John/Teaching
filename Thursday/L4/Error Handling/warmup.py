# WARMUP: 
# The code below gets a number from the user and returns the letter that corresponds with that number.
# EXAMPLE: User enters 1, program responds with a. User enters 5, program responds with e
# 1) What are the possible errors with this code?
# 2) What is the Traceback? What information does the Traceback supply us?
# 3) How can I handle errors in my program (HINT: W3SCHOOLS, Python) ?

import string
letters = list(string.ascii_lowercase)

while True:
    answer = input("Enter a number (enter 'stop' to quit): ")
    if answer == "stop":
        break
    index = int(answer) - 1
    print(letters[index])