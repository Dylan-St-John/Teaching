# df = pd.read_csv("https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv")

# shows the whole dataframe
# print(df)

# shows the top 10 rows
# print(df.head(10))

# get columns
# print(df.columns)

# to get a specific column
# print(df['director_name'])

# select more than one column
# print(df[['director_name', 'imdb_score']])

# data filtering
# - boolean indexing
# print(df[df['imdb_score'] > 8])

# OBJECTIVE: Which Nations are most represented?
# 1) Load data
# df = pd.read_csv("https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv")

# 2) Value Counts
# print((df['country'].value_counts()).head(10))

# OBJECTIVE TWO: Sum of the directors names by their gross income?
# 1) Read data 
# df = pd.read_csv("https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv")

# df_gross = df.groupby('director_name')['gross'].sum()
# df_gross.sort_values(ascending=True)
# # This code needs work! Why isnt it working?
# print(df_gross.head(10))

# OBJECTIVE THREE: Number of movies released every year
# 1) Read data 
# df = pd.read_csv("https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv")
# print(df.columns)

# pd.set_option('display.max_rows', 500) 
# df_movies = df.groupby('title_year')['movie_title'].count()
# print(df_movies)

# OBJECTIVE FOUR (With Matplotlib): Analyse popular Actors on Facebook
import pandas as pd
import matplotlib.pyplot as plt
# 1) Read data 
df = pd.read_csv("https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv")
# print(df.columns)
# 2) Group an actor set with their names
df_actor = df.groupby("actor_1_name")['actor_1_facebook_likes'].sum()
print(df_actor)

# 3) Sort the data from largest to smallest

# 4) Graph this data in matplotlib