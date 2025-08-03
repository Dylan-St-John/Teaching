# Example file showing a basic pygame "game loop"
from turtle import width
import pygame, os, sys
import random
from pygame.locals import *
# pygame setup
pygame.init()
screen = pygame.display.Info()
#set the width and height to the size of the screen
#size = (width, height) = (screen.current_w, screen.current_h)
size = (width, height) = (500,500)
screen=pygame.display.set_mode(size)
color=(26,255,255)

clock = pygame.time.Clock()
running = True
ball = pygame.image.load('ball1.png')
ball = pygame.transform.smoothscale(ball,(40,40)) #helps resize the ball
ball_rect = ball.get_rect()
ball_rect.center = (width//2,height//2)


speed = pygame.math.Vector2(0, 5) #sets y speed or x speed
speed.rotate_ip(random.randint(0,360))#chooses random number from 0 to 360 for direction

def move_ball():
    ball_rect.move_ip(speed)

#x = random.randint(-5, 5)
#y = random.randint(-5, 5)
def main():   
    while True:
        clock.tick(60)  # limits FPS to 60
        move_ball()
    # poll for events
    # pygame.QUIT event means the user clicked X to close your window
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()

        screen.fill(color)
        screen.blit(ball,ball_rect)
        pygame.display.flip()

    # flip() the display to put your work on screen
        
        
         

if __name__=='__main__':
    main()




