import pygame

class Player(Pygame.sprite.Sprite):
    def __init__(self, path, pos):
        # image, rect
        self.movement = [0, 0]
        
    def update(self):
        # try to move the player by future movement
        self.rect.move_ip(self.movement[0], self.movement[1])
        # if, after this movement, the player collides with a wall
        
        # HINT: spritecollide
            # push the player back
        # reset future movement
        self.movement = [0, 0]

    def set_movement(self, x, y):
        self.movement[0] += x
        self.movement[1] += y