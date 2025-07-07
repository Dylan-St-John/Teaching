# Battleship! Have you played before? How does it work?
# WARMUP: Create a 2D list of 0s (10 rows and 10 columns). Print this to the console.
hit_board = []
enemy_ship_board = []
game_over = False
ships = []

# 5b) Create a function that determines a random location on the board
# to place a ship. Return this information as a tuple that stores the
# x and y location.
# HINT: Python Data Types

# 4) Create a Ship Class! This class should have the following:
class Ship:
    def __init__(self, size, name):
        # a) self-attributes for: its size (int), name (string) --> These are required to create a Ship
        self.size = size
        self.name = name
        # b) self-attributes for: damage (int), position (empty list)
        self.damage = 0
        self.position = []
        # 5) PLACING THE SHIP RANDOMLY ON THE BOARD
        # a) Create a self variable called "direction". This variable
        # should be a random number between either one or zero
        # --> 0 == horizontal, 1 == vertical
        
        empty_space = False
        row = 0
        col = 0
        # while empty_space is False:
            

# EXAMPLE: example = Ship("submarine", 1)
# --> names for ships: submarine(1), corsair(2), cruiser(3), battleship(4), carrier(5)
# d) Add 5 new Ships into the ships list (1 of each type)
ships.append(Ship(1, "submarine"))
ships.append(Ship(2, "corsair"))
ships.append(Ship(3, "cruiser"))
ships.append(Ship(4, "battleship"))
ships.append(Ship(5, "carrier"))
print(ships[2].name)



def generate_board():
    # 1) Create a function that creates the gameboard (a 2D Array filled with 0s - our gameboard)

        # EXAMPLE:

        # hit_board = generate_board()
        # hit_board == 
        #[
        # [0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0]
        # [0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0]
        # [0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0]
        #]
    board = []
    for j in range(10):
        row = []
        for i in range(10):
            row.append("0")
        board.append(row)
    return board
    # another way:
    # for x in range(10):
        # board.append(["0"] * 10)

# 2) Create a function that takes in a game_board as a parameter. Print this board to the console
def print_board(game_board):
    # First Attempt
    # row_string = ""
    # for i in range(len(game_board)):
    #     for j in range(len(game_board[0])):
    #         row_string += " " + game_board[i][j]
    #     print(row_string)
    #     row_string = ""
    for row in game_board:
        print(" ".join(row))

# 3) Create a main game function that asks the user for input. Start the main game function
#  by calling the previous two functions
def main():
    print("Battleship!!")
    hit_board = generate_board()
    print_board(hit_board)
    # while the game is not over
    while game_over is False:
        # ask the user for inputs for a row and a column
        try:
            row_input = int(input("Enter a row (0-9): "))
            column_input = int(input("Enter a column (0-9): "))
        # --> 1) Youll need to make sure the user can only input numbers (not repeating numbers)
        # --> 2) The user cannot enter numbers outside of the range of the game_board 
            if ((row_input < 0 or row_input > (len(hit_board) -1)) or column_input < 0 or column_input > (len(hit_board[0]) -1)):
                print("Your guess is outside of the range of the board, try again")
        except ValueError:
            print("Please try again") 
        # HINT: Try Except, Python Data Types
        
        # --> 3) The user needs to input new values if the value has already been guessed WE WILL RETURN TO THIS

main()