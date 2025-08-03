# Create a class called Tile that has the following properties:
# --> This class should take in two variables, one for the file path
# and another for the pos of the rect in the game
# 1) It should inherit from the Pygame.sprite.Sprite class
# 2) Define its file path
# self.path = path
# path == images['w'] or images['f']...
# i.e. "/images/tiles/door0.gif"
# 3) Define its image is the loaded version of the file path
# HINT: image.load
# 4) Define the rect of this sprite, including its position

import pygame

class Tile(pygame.sprite.Sprite):
    def __init__(self, path, pos):
        super().__init__()
        self.path = path
        self.image = pygame.image.load(path)
        self.rect = self.image.get_rect()
        self.rect.topleft = pos


# What does the image look like? (image load..)
# Where does the image belong on our stage? (positioning)
# What is the size of our image (rectanglular property of the image)