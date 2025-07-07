# 1) Create the initial setup for a pygame project, including:
# - Screen, size and clock variables

import pygame
from deck import Deck

pygame.init()
size = (width, height) = (700, 500)
screen = pygame.display.set_mode(size)
clock = pygame.time.Clock()
bg_color = (0, 102, 0)
running = True
board = pygame.sprite.Group()
selected_card = pygame.sprite.GroupSingle()
deck = None

def init():
    # The purpose of this function is to initialise the pyramid itself (and the initial game
    # state)
    deck = Deck()
    # for every row
    for row in range(7):
        # for every column
        for column in range(row + 1):
            # deal a card from the deck
            card = deck.deal()
            # place it in its appropriate location on the pyramid
            card.rect.midtop = (width//2 - 40 * row + 80 * column, 30 + 30*row)
            # flip the card over
            card.flip()
            # add the card to the board sprite group
            board.add(card)
            # --> in the main function, draw the board sprite group to the screen

def process_events():
    # - An event handler function for when the user wants to quit
    global running
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = True
        # CHALLENGE: Add an event handler for when the user wants 
        # to full screen

        # 4) When the user clicks on the screen, we need to detect
        # if theyve clicked on a card
        if event.type == pygame.MOUSEBUTTONDOWN:
            if event.button == 1:
                check_card_clicked(event.pos)
        # --> run a function called check_card_clicked, 
        #      passing in the coordinates as paramaters

# 5) check_remove function
def check_remove(card_clicked):
    # if there is a card inside of selected_card and the ranks of the selected_card + the card_clicked
    # is 13
        # remove both of the sprites from the game
        # HINT: kill
    # elif the card we clicked is a King
        # remove that card and empty out the selected_card
    # otherwise
        # add to selected_card card_clicked

def check_card_clicked(pos):
    # print(pos)
    card_clicked = None
    # a) for every card on our board
    for card in board:
        # if the card intersects with where we clicked
        if card.rect.collidepoint(pos):
            # print the console the card you clicked (rank, suite)
            # print('Card Clicked: ' + str(card.rank) + ' ' + card.suite)
            # card_clicked = the card at the coordinates
            card_clicked = card
    
    # b) --> How can we only print to the console the cards in the front
    # rows?
    if card_clicked is not None:
        # For every sprite that collides with card_clicked
        # HINT: spritecollide
        hit_list = pygame.sprite.spritecollide(card_clicked, board, False)
        for hit_card in hit_list:
            # if our cards y coordinate is greater than the collided card
            if hit_card.rect.y > card_clicked.rect.y:
                # we cannot select this card
                return
           
        # print out the card you clicked
        # print('Card Clicked: ' + str(card_clicked.rank) + ' ' + card_clicked.suite)

        selected_card.add(card_clicked)
        # how could we draw a golden barrier around this card?
        # --> In the main function, draw a rect ontop of the selected cards rect
        # HINT: draw

        # 5) We need to check to see if we should remove a card. Create a function called
        # 'check_remove' that takes in the card clicked as a parameter. Be sure to move the
        # 'selected_card.add(card_clicked) code to this function instead of at the end of check_card_clicked

def main():
    global screen
    # TO TEST THE CARD CLASS: Draw it to your screen
    # --> ace_of_spades = Card(1,'spades')
    # test_card = Card(13, 'Spades')
    # test_card.flip()
    deck = Deck()
    deck.shuffle()
    init()
    while running:
        process_events()
        # test_card = deck.deal()
        # test_card.flip()
        screen.fill(bg_color)
        # for i, card in enumerate(deck.cards):
        #     card.flip()
        #     screen.blit(card.img, [10 +(i*10), 10 +(i*10)])
        # --> screen.blit(ace_of_spades, ace_of_spades.rect)
        # screen.blit(test_card.img, test_card.rect)
        board.draw(screen)

        clock.tick(60)
        
        pygame.display.flip()
    
    pygame.quit

if __name__ == "__main__":
    main()