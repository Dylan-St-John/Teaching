# Example file showing a basic pygame "game loop"
import pygame
import sys, random
from pygame.locals import *
# pygame setup
pygame.init()
screen_info = pygame.display.Info()
#size = (width, height) = (screen_info.current_w, screen_info.current_h)
size = (width, height) = (500,500) 
screen=pygame.display.set_mode(size)
clock = pygame.time.Clock()
running = True

clock=pygame.time.Clock()
color = (26,255,255)

ball = pygame.image.load ("ball1.png")

ball = pygame.transform.smoothscale(ball,(30,30))   
ball_rect = ball.get_rect()
ball_rect.center = (width//2,height//2)

speed = pygame.math.Vector2(0,5)
speed.rotate_ip(random.randint(0,360))

def move_ball():
    ball_rect.move_ip(speed)

def main():
        while True:
            clock.tick(60)
            move_ball()
            for event in pygame.event.get():
                if event.type == QUIT:
                    sys.exit()
            screen.fill(color)
            screen.blit(ball,ball_rect)
            pygame.display.flip()
        
if __name__=='__main__':
    main()

    # RENDER YOUR GAME HERE
 
                  
