#1) Initial Setup. (look at the pygame tutorial quickstart)

# This includes:
# Importing pygame
# Calling init
# Setting up the screen
# Creating a clock

# Making a main game loop that:
# proccess events (quiting the window)
# ticking the clock forwardd
# Filling the screen with a colour
# A call to pygame.display.update() or pygame.display.flip()  

# 2) Create a class called 'Card' that has the following 
# properities and methods

# a) It inherits from the pygame sprite class
# HINT: https://www.pygame.org/docs/ref/sprite.html#pygame.sprite.Sprite
# b) properties for: rank, suit, faceup, rect, image
# c) method for: flipping the card over