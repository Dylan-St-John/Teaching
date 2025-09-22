import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

df = pd.read_csv('movie_metadata.csv')

# DIFFERENT COMMANDS
# 1) Head - returns the x amount of rows from the top
# EXAMPLE df.head(10)

# 2) Accessing columns
# print(df[["num_voted_users", "gross"]].head(10))

# 3) Value Counts - adding up the values of the same results of columns
country = df['country'].value_counts()
# print(country);

# --> How can I manipulate data to find sums, means, averages etc?
# i.e. sum of director's name [by their gross income]
# GROUP BY IS DATA TRANSFORMATION ON A SPECIFIED COLUMN
#
# METHODS TO TRANSFORM DATA
# mean, mode, median, count, unique

df_gross = df.groupby('director_name')['gross'].count()
sorted_values = df_gross.sort_values(ascending=False).head(20)
print(sorted_values)

# Lets make some graphs!