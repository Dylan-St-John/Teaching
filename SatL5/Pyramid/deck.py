from card import Card
import random

# 3) Create a Deck class that contains the following:
class Deck:
    def __init__(self, suites=['Spades', 'Hearts', 'Diamond', 'Clubs']):
        # a) initialise our deck of cards (filling the deck with cards)
        # --> make a self property called cards thats a list of all
        # the cards you put in here
        self.cards = []
        for suite in suites:
            for i in range(1, 13):
                self.cards.append(Card(i, suite))

    # b) Create a method for dealing a card from the deck
    def deal(self):
        # if the length of the cards list is greater than 0
        if len(self.cards) > 0:
            # return the last item from the cards list HINT: Pop
            return self.cards.pop()
        else:
            return None
        # TO TEST (In your main.py):
        # --> deck = Deck()
        # --> test_Card = deck.deal()
        # draw testCard to the screen

    # c) Create a method for shuffling the deck of cards 
    def shuffle(self):
        # How can we swap two entries in a list?
        # for every card in our list (starting at the end, take a look
        # at the range() article):
        for i in range(len(self.cards)-1, 0, -1):
            # --> pick a random index thats below our counter 
            # (this is the random card we will swap)
            idx = random.randint(0, i-1)
            # DO THE SWAP:
            # --> assign our current card to a temp variable
            temp = self.cards[idx]
            # --> assign our random index card to the current card
            self.cards[idx] = self.cards[i]
            # --> assign our random indexed card to the temp variable 
            # (contains the current card)
            self.cards[i] = temp


    