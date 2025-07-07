import sqlite3
import matplotlib
# 1. Import your .db file to the repl.it
# 2. Read through the sqllite 3 documentation. You'll need to know how to:
# --> connect to your database
conn = sqlite3.connect('rio_olympics.db')
# --> create an object thats used to query your database
cur = conn.cursor()

result = cur.execute('select nationality from athletes group by nationality order by SUM(bronze + silver + gold) desc limit 10')
answers = result.fetchall()
print(answers)

columns = []

# this function gets the names of the columns of the atheletes table
def get_columns():
  cur.execute("PRAGMA table_info(athletes);")
  for row in cur:
    columns.append(row[1])

# this prints the column names in a readable way
def print_columns():
  print("The columns in the table are: "+" ".join(col for col in columns))
  
def main():
  get_columns()
  print_columns()
  # 3. Create a main function that asks the user how they'd like to query / manipulate the database (at least two - three ways). Here are some ideas:
  # --> add an entry to the database
  # --> print out all of the columns of the database
  # --> print out some rows of the database based on information inside of the columns i.e.
  # print out rows that share similar information
  # --> delete an entry from the database
  
  # This main function should run in a while loop until the user would like to exit.
  

main()

