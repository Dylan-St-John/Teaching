# 2) Create a dictionary that stores all of the text prompts the user
# will see in the game.
descriptions = {
    'cabin': 'You are in a quaint cabin, there is a door to the east.',
    'yard':'You find yourself in a beautiful garden. There is a forest to the east, a barn to the south, and a cabin to the west.',
    'forest':'You are in a spooky forest. The yard is back to the west.',
    'barn': 'You are in a barn. There is a treasure chest in the middle of the room.'
}

# OPTIONAL: Create a dictionary that stores the relative locations
# of each place in your game
player = {'location': 'cabin'}
game_map = {
                'cabin':{
                    'east':'yard'
                }, 
                'yard':{
                    'east':'forest',
                    'south':'barn',
                    'west':'cabin'
                }, 
                'forest':{
                    'west': 'yard'
                },
                'barn':{
                    'north': 'yard'
                }
            }
print(game_map['yard']['south'])


# 3) Create a function that describes the location of the user depending on where they are.
# EXAMPLE: I am in the forest, I type "look", and the console prints out a description of the area I am in.

game_over = False

# 1) Create a main function that asks the user for input. What types of input should the user be allowed to ask at all stages of the game?
# --> "help" to display the inputs the user can input
# --> "quit" to leave the game

class User:
    def __init__(self, inventory = []):
        self.health = 10
        self.inventory = inventory

new_user = User()
print(new_user.inventory)

def main():
    global game_over
    # while game over is False
    while game_over is False:
        # 1a) ask the user for some input
        user_input = input("What would you like to do?")
        if user_input == "help":
            #give them a list of instructions
            print("INSTRUCTIONS: ... \n test")
        # 1b) If the user inputs "quit", exit the program
        elif user_input == "quit":
            print("Thanks for playing, better luck next time")
            game_over = True

        elif user_input == "look":
            # read out the description of the room the user is in
            pass

        # elif user_input == "cardinal direction (north, south, east or west)":
        #     # ill move the player over there
        # # 1c) If the user inputs an invalid input, ask them to try again
        # else:
        #     print("I dont understand, try again")

if __name__ == "__main__":
    main()





