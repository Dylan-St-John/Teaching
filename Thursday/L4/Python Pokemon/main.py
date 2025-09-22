import random
# POKEMON PROPERTIES:
# 1) HP
# 2) ATTACK
# 3) DEFENCE
# 4) SP ATTACK
# 5) SP DEFENCE
# 6) SPEED
# 7) NAME
# 8) SPECIES
# 9) TYPE (Element)
# 10) WEAKENESSES (TYPE)
# 11) RESISTANCES (Strong against certain types)
# 12) MOVE SETS

class Pokemon():
    def __init__(self, name, element, weakness, resistance, moveSet, level):
        self.health = random.randint(115, 150)
        self.attack = random.randint(80, 115)
        self.defence = random.randint(80, 115)
        self.speed = random.randint(80, 115)
        self.name = name
        self.element = element
        self.weakness = weakness
        self.resistance = resistance
        self.moveSet = moveSet
        self.level = level

class Treeko(Pokemon):
    def __init__(self, name, level):
        super.__init__(name, 'Treeko', 'Grass', 'Fire', 'Water', ['Vine Whip', 'Tackle', 'Leer', 'Slash'], level)

class Charmander(Pokemon):
    def __init__(self, name, level):
        super().__init__(name, 'Fire', 'Water', 'Grass', ['Ember', 'Tackle', 'Growl', 'Fire Spin'], level)

treeko = Treeko('King Slasher', 12)
charmander = Charmander('Charchar', 10)

# piplup = Pokemon()
print(treeko.element)


