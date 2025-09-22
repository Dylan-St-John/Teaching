# Text Adventure: Haunted House
# Mission: Find the ghost and exorcise it

inventory = {
    "holy_relic": False,
    "code": None
}

def main_room():
    print("\n--- Main Room ---")
    print("You walk into the haunted house.")
    print("Living room to the west, kitchen to the east, bathroom to the north.")
    action = input("Where do you go? (west/east/north): ").lower()

    if action == "west":
        return living_room()
    elif action == "east":
        return kitchen()
    elif action == "north":
        return bathroom()
    else:
        print("Invalid choice.")
        return main_room()


def living_room():
    print("\n--- Living Room ---")
    print("There is a TV in the middle of the room, displaying nothing but static.")
    action = input("What do you do? (leave/investigate): ").lower()

    if action == "leave":
        return main_room()
    elif action == "investigate":
        return ghost_encounter()
    else:
        print("Invalid choice.")
        return living_room()


def kitchen():
    print("\n--- Kitchen ---")
    print("You find a small safe with a combination lock.")
    action = input("Do you want to open it? (yes/no): ").lower()

    if action == "yes":
        return safe()
    else:
        return main_room()


def bathroom():
    print("\n--- Bathroom ---")
    print("There is a mirror with a knob attached to it.")
    action = input("What do you do? (leave/investigate): ").lower()

    if action == "leave":
        return main_room()
    elif action == "investigate":
        return code_found()
    else:
        print("Invalid choice.")
        return bathroom()


def safe():
    print("\n--- Safe ---")
    code = input("The safe requires a code. Enter code: ")
    if code == "1234":
        print("The safe clicks open. You collect the holy relic!")
        inventory["holy_relic"] = True
        return kitchen()
    else:
        print("The code is incorrect.")
        retry = input("Try again? (yes/no): ").lower()
        if retry == "yes":
            return safe()
        else:
            return kitchen()


def code_found():
    print("\n--- Bathroom ---")
    print("You find a code written on the mirror: '1234'.")
    inventory["code"] = "1234"
    return bathroom()


def ghost_encounter():
    print("\n--- Ghost Encounter ---")
    print("The ghost devours you...")
    if inventory["holy_relic"]:
        print("But you raise the holy relic!")
        print("✨ You exorcise the ghost! You win! ✨")
    else:
        print("You have no relic to defend yourself. 💀 Game over!")


def play():
    print("MISSION: Find the ghost and exorcise it.\n")
    main_room()


# Start game
if __name__ == "__main__":
    play()