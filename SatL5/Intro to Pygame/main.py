import pygame

pygame.init()
screen = pygame.display.set_mode((1280, 720))
clock = pygame.time.Clock()
running = True

balls = []

# CLASS IDEA
# --> display image
# --> move and bounce off the walls
class Ball():
    def __init__(self, pos):
        # 1) Load an image onto the ball
        self.img = pygame.image.load("ball.png")
        self.img = pygame.transform.scale(self.img, (50, 50))
        # 2) Create a rect object out of the ball
        self.rect = self.img.get_rect(center=pos)
        # IDEA FOR MOVEMENT
        # a) Create a vector
        # --> a random speed?
        self.speed = pygame.math.Vector2(10,10)
    def update(self):
        self.rect.move_ip(self.speed)
        # How do we get the ball to bounce off the walls?
        if self.rect.left < 0 or self.rect.right > screen.get_width():
            self.speed[0] *= -1
        if self.rect.top <0 or self.rect.bottom > screen.get_height():
            self.speed[1] *= -1
          


# IF NOT USING A CLASS: How do we create a pygame thing for us to
# manipualte?
# 1) Create Surface object using image
# image.load()
# Surface.blit()

# 2) Create Rect object out of Surface object
# get_rect()

# 3) Moving your object:
# a) Create a 2D Vector Object
# b) Rotate it randomly
# c) Make your object (the Rect) move in place by this Vector

def process_events():
     global running
     for event in pygame.event.get():
            if event.type == pygame.QUIT: 
                running = False
            # if the event is clicking
                # generate a new ball with random speed

def main():
    #randomly generated position?
    ball = Ball((300, 30))
    while running:
        process_events()
        # - Make a ball with:

        # b) Make the rect move in place by the vector

        screen.fill("purple")
        ball.update()

        screen.blit(ball.img, ball.rect)
        pygame.display.update()
        clock.tick(60)

    pygame.quit()

if __name__ == "__main__":
    main()