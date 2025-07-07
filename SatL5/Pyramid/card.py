import pygame

# 2) Make a Card class that has the following properties:
# - Make this class a seperate file
# - Make this class inherit from the pygame sprite.Sprite class
class Card(pygame.sprite.Sprite):
    def __init__(self, rank, suite):
        super().__init__()\
        # - its rank and suite
        self.rank = rank
        self.suite = suite
        self.faceup = False
        self.images = {True: pygame.image.load(f"PNG\Medium\{suite} {rank}.png"),
                    False: pygame.image.load(f"PNG\Medium\Back Grey 2.png")}
        # - An image loaded on it
        self.image = self.images[self.faceup]
        # - A rectangular property
        self.rect = self.image.get_rect()
        self.rect.center = (350, 250)
        
    # CHALLENGE: Give the Card class a method called 'flip' that 
    # Flips the card to its other side, showing its card backing
    def flip(self):
        self.faceup = not self.faceup
        self.image = self.images[self.faceup]
