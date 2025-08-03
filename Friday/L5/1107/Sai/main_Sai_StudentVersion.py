# Example file showing a basic pygame "game loop"
import pygame
import sys, random
import pygame.locals 
# pygame setup
pygame.init()
screen_info = pygame.display.Info()
size = (width, height) = (screen_info.current_w, screen_info.current_h)
clock = pygame.time.Clock()
running = True

clock=pygame.time.Clock()
color = (26,255,255)

ball = pygame.image.load ("ball.png")

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
            for even in pygame.event.get():
                if event.type == QUIT:
                    screen.fill(color)
                    screen.blit(ball,ball_rect)
                    pygame.display.flip()

if __name__=='__main__':
    main()

    # RENDER YOUR GAME HERE
 
                  
