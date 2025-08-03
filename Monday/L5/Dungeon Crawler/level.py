import pygame, random
from tile import Tile

class Level(pygame.sprite.Sprite):
  def __init__(self):
    super().__init__()
    self.walls = pygame.sprite.Group()
    self.floors = pygame.sprite.Group()
    self.start = (0, 0)
    # self.player = player

  def draw(self, screen):
    self.walls.draw(screen)
    self.floors.draw(screen)

  def update(self):
    # call the players update function
    self.player.update()

class RandomLevel(Level):
  def __init__(self, images):
    super().__init__()
    self.generate_level(images)
  
  def place_start_door(game_map):
    # develop algorithm for finding where to place door, and making that happen
    #...
    for i in range(len(game_map)):
      for j in range(len(game_map[0])):
        if game_map[i][j] == 'f':
          game_map[i-1][j] = 's'
          self.start = (i * 32, j *32)
          return


  def generate_level(self, images):
    game_map = []
    screen_info = pygame.display.Info()
    # for the width of our screen divided by the width of the image we're using (in pixels, which should be 32)
      # add to the game_map a 'w'.
    # FINAL VERSION SHOULD LOOK LIKE:
    # [['w','w','w','w','w','w'], ['w','w','w','w','w','w'], ['w','w','w','w','w','w'], ['w','w','w','w','w','w'], ....]
    for i in range((screen_info.current_w//32) + 1):
      game_map.append(['w'] * ((screen_info.current_h//32) + 1))

    

    # Find out how many tiles we need to convert to be floors if we
    # want half of the walls to be floors
    fnum = int((len(game_map) * len(game_map[0])) * 0.5)
    tile =  [len(game_map) // 2, len(game_map[0]) // 2]
    print(fnum)
    count = 0

    while count < fnum:
    # IMPLEMENT RANDOM WALK ALGORITHM
      # if the tile we've currently selected is not a floor
      if game_map[tile[0]][tile[1]] != 'f':
        # convert it to a floor by making it 'f' instead of 'w'
        game_map[tile[0]][tile[1]] = 'f'
        print(game_map[tile[0]][tile[1]])
        # increase count by one
        count += 1
      # select a random direction to 'walk in' (north, south, east or west)
      walk = random.randint(1, 4)
      # if we're moving north
      if walk == 1 and tile[0] > 1:
        # change tile to be one up
        tile[0] -= 1
      # if we're moving south
      elif walk == 2 and tile[0] < (len(game_map) -3):
        tile[0] += 1
        # change the tile to be one down
      #...
      elif walk == 3 and tile[1] < (len(game_map[0]) -3):
        tile[1] += 1

      elif walk == 4 and tile[1] > 1:
        tile[1] -= 1
        
    for row in game_map:
      print(row)

    place_start_door(game_map)


    for i in range(len(game_map)):
      for j in range(len(game_map[10])):
          if game_map[i][j] == "w":
              self.walls.add(Tile(images["w"], (i * 32, j * 32)))
          elif game_map[i][j] == "f":
              self.floors.add(Tile(images["f"], (i * 32, j * 32)))