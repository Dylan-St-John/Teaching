# 1) FLOW CHART:
# a) Beginning (where are we starting, whats our objective)
# b) Endings (good ending, bad ending) --> win or lose scenario
# c) Map (between 2 - 5 rooms)
# d) User has to make decisions

# 3) GLOBAL VARIABLES
# --> What information do we need to store in this game? 
# How should we store it?

game_over = False

# 3a) DICTIONARY OF MAP
# --> How do we navigate to different rooms?
# We need to know what the map is
# We need to know where the user can go based on which room theyre in
map = {
    "main": {
        "north": "bathroom",
        "east": "kitchen",
        "west": "livingRoom"
    },
    "bathroom":{
        "south": "main"
    },
    "livingRoom":{
        "east": "main"
    },
    "kitchen":{
        "west": "main"
    }
}

# 3b) Directions list
directions = ["north", "south", "east", "west"]

# 3c) Descriptions dictionary
# --> Depending on the room the users in, read 
# them a description of the room
rooms = {
    "main": "You step into the foyer of the abandoned house. "
    "The air is thick with dust, and a faint musty smell lingers. "
    "Three doorways stand before you—one leading to the kitchen, another to the bathroom, "
    "and the last to the living room. Faint whispers seem to echo from the walls, "
    "but it must be your imagination… right?",

    "livingRoom": "The living room is dimly lit, the only glow coming from an old television "
    "set flickering with static. The furniture is draped in white sheets, their ghostly "
    "silhouettes adding to the unease. The temperature drops as you enter, and you feel a "
    "presence watching you. You’re not alone in here.",

    "bathroom": "A cracked mirror hangs above a rust-stained sink. The room smells of mildew, "
    "and water drips slowly from a faucet, each drop echoing unnaturally loud. "
    "Behind the mirror, a small cabinet door is slightly ajar. If you open it, you might "
    "find something important…",

    "kitchen": "The kitchen is eerily quiet, save for the occasional creak of the old wooden "
    "floor. Dusty counters line the walls, and an old fridge hums faintly. On the counter "
    "sits a locked chest with a combination lock, its metal surface scratched and worn. "
    "Whatever is inside must be important."
}

# 3d) DICTIONARY FOR PLAYER
# What room are we in?
# Inventory / Items
# Traits

player = {'location': 'main'}

# 4a) What happens when the user enters a direction?
def navigate(direction):
    global player
    # IDEAS:
    # --> Send them to that room (use the map somehow)
    # --> Look at the player dictionary to see what room theyre currently in
    # --> Read them a description of the room theyve entered
    # --> The user cannot go in a direction that theyre not allow to go in

    # PSUEDOCODE:
    # If we look at the map and the direction the player wants to navigate to (from their
    # current location) doesnt exist, then tell the user to input a new direction.
    # HINT: Python Dictionaries - Access Items

    # OTHERWISE: 
    # a) Change the player location to the new location
    # b) Read the description of the room they entered

    if direction in map.get(player.get('location')):
        player['location'] = map.get(player.get('location'))[direction]
        look(player['location'])
    else:
        print('Invalid location. Please try again')

def look(location):
    print(rooms[location])


# PYTHON PROGRAMMING:
# 2) USER INPUT
# Create a function called 'main' that asks the user for input until
# the game is over. We should be able to handle the following inputs:

# If the user writes "help", display to them a list of commands that they
# can enter into the console

# If the user writes "quit", exit the game (stop asking for input)

# HINT: While loop, input
# INPUT SUGGESTIONS: look, cardinal directions (east, south, north)

def main():
    global game_over
    while game_over is False:
        choice = input("What would you like to do?\n")
        if choice in directions:
            # 4a) What happens when the user enters a direction?
            navigate(choice)
            
        elif choice == 'look':
            # 4b) to be added next
            look(player['location'])
            pass
        elif choice == 'quit':
            print("Goodbye.")
            game_over = True
        elif choice == 'help':
            print("\nInstructions:\n")
            print("Enter 'north', 'east', 'south', or 'west' to move.")
            print("Enter 'look' to view the room.")
            print("Type 'quit' to exit the game.\n")
        else:
            print("I do not understand {}.".format(choice))

if __name__ == '__main__':
    main()
