# 1) Create a dictionary called 'phone book' which contains people 
# and phone numbers

# 2) Create a function called 'look_up' that returns to the user a phone
# number based on the name given.
# EXAMPLE: look_up("Dylan") ==> 11183267409

phone_book = {
    "Dylan": 87332541345,
    "Neil": 9854562,
    "Philip": 32451234,
    "Devin": 82645191,
    "Maclaren": 48103265
}

def look_up(name):
    try:
        return phone_book[name]
    except KeyError:
        return "No number on file"

user_input = input("Please enter a name: \n")
print(look_up(user_input))