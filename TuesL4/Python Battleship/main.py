# WELCOME BACK MATE, todays game: Battleship! 
# Have you played before? How does it work?
# WARMUP: Create a 2 dimensional list of 0s 
# (10 rows and 10 columns). Print this to the console.
import random

hit_board = []
enemy_board = []
game_over = False

def create_board(board):
    board = []
    for row in range(10):
        r = []
        for column in range(10):
            r.append("0")
        board.append(r)
    return board
        
hit_board = create_board(hit_board)

# 2) Create a function that takes in a game_board as a parameter. 
# Print this board to the console

def print_board(board):
    for row in board:
        print(" ".join(row))
    print("\n")

print_board(hit_board)

# 4) Create a ship class that has the following properties / methods:
class Ship:
    # a) Create the __init__ function for the board with the following
    #   PROPERTIES: length (size), name, damage, position
    def __init__(self, name, size):
        self.size = size
        self.name = name
        self.position = []
        self.damage = 0
        self.horizontal = random.choice(True, False)

    # b) Create a METHOD: 
    # placing the ship on the board (somewhere random)

    # Things to consider:
   
    # - keep track of each unit of the ship (put in positions array)

    # - making sure it isnt placed off the edge
    # - horizontal or vertical? (random)
    
    # --> if its horizontal, you cannot place it at the edges of the rows
    # --> pick a random number between the first column and the last
    # column minus the length of the ship

    # if its vertical, you cannot place it on rows that dont exist
    # --> pick a random number between the first row and the last row
    # minus the length of the ship

    # - dont place a ship where this already a ship
    # we should check the enemy board for every position our ship
    # would occupy, and if there is an enemy ship dont place the ship
    
    # if we have checked where we want to place our ship
    # and the positions are all empty, add the positions to the position array


# c) Create some instances of ships!


# 3) Create a main game function that asks the user 
# for input. Start the main game function by calling 
# the previous two functions

# PSUEDOCODE
# def main():
    # while the game is not over

        # a) Youll need to make sure the user can only 
        # input numbers (not repeating numbers)

def main():
    while game_over is not True:
        # ask the user for inputs for a row and a column
        guess_row = int(input("Enter Row:"))
        guess_col = int(input("Enter Column:"))
        
        # b) The user cannot enter numbers outside of 
        # the range of the game_board 
        # HINT: Try Except, Python Data Types 

        #Check if the guess was off the board.
        if (guess_row < 0 or guess_row > (len(hit_board) - 1) or guess_row == "") or (guess_col < 0 or guess_col > (len(hit_board[0]) - 1) or guess_col == ""):
            print("Har har har, that ain't on yonder board, try again!")
        
        # c) The user needs to input new values if the 
        # value has already been guessed (WE WILL RETURN TO THIS)