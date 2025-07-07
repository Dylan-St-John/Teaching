# WELCOME BACK, todays game: Battleship! 
# Have you played before? How does it work?
# WARMUP: Create a 2 dimensional list of 0s 
# (10 rows and 10 columns). Print this to the console.

hit_board = []
# enemy_board = []

rows = 10
columns = 10


def generate_board():
    board = []
    # SOLUTION 1:
    # for i in range(rows):
    #     row = []
    #     for j in range(columns):
    #         row.append(0)
    #     board.append(row)

    # SOLUTIONS 2:
    for i in range(rows):
        board.append(['0'] * 10)
    return board

hit_board = generate_board()
# enemy_board = generate_board()
# dylan_board = generate_board()
print(hit_board[0][0])

# 1) Create a function that creates a gameboard 
# (a 2D Array filled with 0s - our gameboard)
    # EXAMPLE:
    # hit_board = generate_board()
    # hit_board == 
    #[
    # [0,0,0,0,0,0,0,0,0,0,0], 
    # [0,0,0,0,0,0,0,0,0,0,0], 
    # [0,0,0,0,0,0,0,0,0,0,0], 
    # [0,0,0,0,0,0,0,0,0,0,0],
    # [0,0,0,0,0,0,0,0,0,0,0], 
    # [0,0,0,0,0,0,0,0,0,0,0], 
    # [0,0,0,0,0,0,0,0,0,0,0], 
    # [0,0,0,0,0,0,0,0,0,0,0],
    # [0,0,0,0,0,0,0,0,0,0,0], 
    # [0,0,0,0,0,0,0,0,0,0,0]
    #]
    # HINT: return (could be around functions)


# 2) How can we 'pretty print' this game_board to the console? 
# --> Create a function that takes in a game_board as a parameter. 
# --> Print this board to the console (seperated by spaces)

# PSUEDOCODE
# --> function named print_board (game_board as a parameter)
    # for every item in our board (every item in the board is a row. Every item
    # in a row is a '0')
    # - print out the items inside the row seperated by spaces














































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
