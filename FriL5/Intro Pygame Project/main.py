# Example file showing a basic pygame "game loop"
import pygame

# pygame setup
pygame.init()
size = (width, height) = (1280, 720)
screen = pygame.display.set_mode(size)
clock = pygame.time.Clock()
running = True

# 1) Create a ball on the screen
# 2) Give the ball a random x and y speed
# 3) Have the ball reflect off the walls
# HINT: Tutorial, Rect
# CHALLENGE: Make the ball a Class

ball = pygame.image.load("ball.png")
ball = pygame.transform.smoothscale(ball, (300, 300))
ball_rect = ball.get_rect()


while running:
    # poll for events
    # pygame.QUIT event means the user clicked X to close your window
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # fill the screen with a color to wipe away anything from last frame
    screen.fill("purple")
    screen.blit(ball, (0, 0))

    # RENDER YOUR GAME HERE

    # flip() the display to put your work on screen
    pygame.display.update()

    clock.tick(60)  # limits FPS to 60

pygame.quit()

# import sys, pygame
# pygame.init()

# size = width, height = 320, 240
# speed = [2, 2]
# black = 0, 0, 0

# screen = pygame.display.set_mode(size)

# ball = pygame.image.load("ball.png")
# ball = pygame.transform.smoothscale(ball, (30, 30))
# ballrect = ball.get_rect()

# while True:
#     for event in pygame.event.get():
#         if event.type == pygame.QUIT: sys.exit()

#     ballrect = ballrect.move(speed)
#     if ballrect.left < 0 or ballrect.right > width:
#         speed[0] = -speed[0]
#     if ballrect.top < 0 or ballrect.bottom > height:
#         speed[1] = -speed[1]

#     screen.fill(black)
#     screen.blit(ball, ballrect)
#     pygame.display.flip()