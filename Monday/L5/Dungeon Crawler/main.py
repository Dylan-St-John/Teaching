# Example file showing a basic pygame "game loop"
import pygame
from level import *

# pygame setup
pygame.init()
size = (height, width) = (800, 600)
screen = pygame.display.set_mode(size)
clock = pygame.time.Clock()
running = True
images = {"w": "Dungeon Crawler/images/tiles/floor13.gif", "f": "Dungeon Crawler/images/tiles/roomWall13.gif"}

def process_events():
    # poll for events
    # pygame.QUIT event means the user clicked X to close your window
    global running
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if the user pressed the left Key
            player.set_movement(-32, 0)
            
def main():
    global running
    level = RandomLevel(images)
    
    while running:
        process_events()
        clock.tick(60)
        
        # fill the screen with a color to wipe away anything from last frame
        screen.fill("purple")
    
        # RENDER YOUR GAME HERE
        level.update()
        level.draw(screen)
    
        # flip() the display to put your work on screen
        pygame.display.update()
    
        # limits FPS to 60
    
    pygame.quit()

if __name__ == '__main__':
    main()