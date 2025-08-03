screen = pygame.display.set_mode(size)
clock = pygame.time.Clock()
color = (26, 255, 255)

def main():
    while True:
        clock.tick(60)
        screen.fill(color)
        pygame.display.flip()

if __name__ == '__main__':
    main()
