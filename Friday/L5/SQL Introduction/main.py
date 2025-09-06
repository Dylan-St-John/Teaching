# 1) Connect to your database
# and print it the contents of it in the console.

# 2) Create an interface for your database. 
# Your interface should support the following options:
# a) Add a new record
# b) Remove a record
# c) Update a record

quit = False

def remove_record(input):
    # add a record
    pass

def add_record(input):
    # add a record
    pass

def main():
    while quit is False:
        user_input = input("Welcome to the database query. What" \
        "Would you like to ask?")
        if user_input == "1":
            add_record(user_input)
        elif user_input == "2":
            remove_record(user_input)
