# import statements
import time
import random

# global variables
inventory = {"torch": 2}

# print inventory
def print_inventory():
    global inventory
    for (k, v) in inventory.items():
        print("%s: %d" % (k, v))

def print_output(decision):
    choice = "i"
    while (choice == "i"):
        choice = input("{0} [y/n] \nEnter i to see you inventory. ".format(decision))
        if (choice == "i"):
            print_inventory()
    if choice in ['y', 'Y', 'Yes', 'YES', 'yes']:
        return True
    return False

def cyclops_battle(stick):
    print ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    print (" Fighting... ")
    print (" You must have above a 5 to kill the cyclops. ")
    print ("It the cyclops hits higher than you, you will die.")
    print ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    time.sleep(2)

    # calculate hit
    if stick:
        your_hit = int(random.randint(3, 10))
    else:
        your_hit = int(random.randint(1, 8))
    cyclops_hit = int(random.randint(1, 5))
    print ("you hit a", your_hit)
    print ("the cyclops hits a", cyclops_hit)
    time.sleep(2)
    
    if cyclops_hit > your_hit:
        print ("The cyclops has dealt more damage than you!")
        complete = 0
        return complete
    elif your_hit < 5:
        print ("You didn't do enough damage to kill the cyclops, but you manage to escape")
        complete = 1
        return complete
    else:
        print ("You killed the cyclops!")
        complete = 1
        return complete
    
# game function
def game():
    # Get global variables
    global inventory

    inventory = {"torch": 2}

    # Play game
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    print("Welcome to the Cavern Adventure!")
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    time.sleep(3)
    print ("You enter a dark cavern out of curiosity. It is dark and you can only make out asmall stick on the floor.")
    
    # Stick taken
    if print_output("Do you take it?"):
        num = random.random()
        if num < 0.8:
            print("You have taken the stick!")
            time.sleep(2)
            inventory["stick"] = 1
        else:
            print("Oh no! The stick was actually a snake.")
            time.sleep(1)
            complete = 0
            return complete
    # Stick not taken
    else:
        print("You did not take the stick")
    
    print ("As you proceed further into the cave, you see a large glowing object")
    # Approach cyclops
    if print_output("Do you approach the object?"):
        print ("You approach the object...")
        time.sleep(2)
        print ("As you draw closer, you begin to make out the object as an eye!")
        time.sleep(1)
        print ("The eye belongs to a giant cyclops!")
        # Fight cyclops
        if print_output("Do you try to fight it?"):
            # With stick
            if "stick" in list(inventory.keys()):
                print ("You only have a stick to fight with!")
                print ("You quickly jab the cyclops in it's eye and gain an advantage")
                time.sleep(2)
                return cyclops_battle(True)
            
        # Without stick
        else:
            print ("You don't have anything to fight with!")
            time.sleep(2)
            return cyclops_battle(False)
        
        #Don't fight cyclops
        print ("You choose not to fight the cyclops.")
        time.sleep(1)
        print ("As you turn away, it ambushes you and grabs you by the leg!")
        complete = 0
        return complete
    # Don't approach cyclops
    else:
        print ("You turn away from the glowing object, and attempt to leave the cave...")
        time.sleep(1)
        print ("But something grabs your leg....")
        time.sleep(2)
        complete = 0
        return complete
    
def main():
    # game loop
    alive = True
    while alive:
        complete = game()
        if complete == 1:
            alive = print_output("You managed to escape the cavern alive! Would you like toplay again?")
        else:
            alive = print_output("You have died! Would you like to play again?")

if __name__ == "__main__":
    main()
