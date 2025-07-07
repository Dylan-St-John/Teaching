# WELCOME BACK MATE, todays game: Battleship! 
# Have you played before? How does it work?
# WARMUP: Create a 2 dimensional list of 0s 
# (10 rows and 10 columns). Print this to the console.

hit_board = []
enemy_board = []

def create_board(board):
    board = []
    for row in range(10):
        r = []
        for column in range(10):
            r.append("0")
        board.append(r)
    return board
        
hit_board = create_board(hit_board)
# print(hit_board)
# create_board(enemy_board)
# print(len(hit_board[0]))


# 2) Create a function that takes in a game_board as a parameter. 
# Print this board to the console

def print_board(board):
    for row in board:
        print(" ".join(row))
    print("\n")

print_board(hit_board)

# 4) Create a ship class that has the following properties / methods:
# a) Create the __init__ function for the board with the following
#   PROPERTIES: length (size), name, damage, position
# 
# b) Create a METHOD: 
# placing the ship on the board (somewhere random)



# 3) Create a main game function that asks the user 
# for input. Start the main game function by calling 
# the previous two functions

# PSUEDOCODE
# def main():
    # while the game is not over
        # ask the user for inputs for a row and a column

        # a) Youll need to make sure the user can only 
        # input numbers (not repeating numbers)

        # b) The user cannot enter numbers outside of 
        # the range of the game_board 
        # HINT: Try Except, Python Data Types 

        # c) The user needs to input new values if the 
        # value has already been guessed (WE WILL RETURN TO THIS)
