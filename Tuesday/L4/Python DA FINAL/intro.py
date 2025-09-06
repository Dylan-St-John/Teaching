# import matplotlib.pyplot as plt
# import numpy as np

# Matplotlib
# # Basic Plot
# X = [1, 2, 3, 4]
# Y = [1, 4, 9, 16]
# # plt.plot(X,Y)
# plt.plot(X,Y, color='green', marker='o', linewidth=6)
# # plt.plot(X,Y, color='green', marker='o')

# plt.xlabel('some X numbers')
# plt.ylabel('some Y numbers')
# plt.show()











# Multiple sets
# X = [1, 2, 3]
# Y1 = [1, 4, 9]
# Y2 = [6,0,19]
# Y3 = [11,4,49]
# plt.plot(X,Y1, color='green')
# plt.plot(X,Y2, color='blue')
# plt.plot(X,Y3, color='red')
# plt.xlabel('some X numbers')
# plt.ylabel('some Y numbers')
# plt.legend(['Y1','Y2','Y3'])
# plt.show()










# Bar Graphs
# names = ['group_a', 'group_b', 'group_c']
# values = [1, 10, 100]
# plt.barh(names, values)
# plt.xlabel("Group Names")
# plt.ylabel("Values")
# plt.title("Example of a Bar Graph")
# plt.show()







# Horizontal Bar Graph
#create data for plotting

# y_values = [5,6,3,7,2]
# x_values = ["A", "B", "C", "D", "E"]
# # Adding an "h" after bar will flip the graph
# plt.barh(x_values,y_values, color ="yellowgreen")
# plt.xlabel("X Values")
# plt.ylabel("Y Values")
# plt.title("Horizontal Bar Graph")
# plt.show()








# Scatter Plot

# # Change sizes of plots on Scatter
# x = [12,7,8,14,2,17,2]
# y = [100,10,50,60,150,10,500]
# sizes = []

# for i in y:
#     sizes.append(i*2)

# plt.scatter(x, y, 200)
# plt.xlabel("X Numbers")
# plt.ylabel("Y Values")
# plt.title("Example of a Scatter Graph")
# plt.show()



# Pie Chart
# myLabels = ['Frogs', 'Hogs', 'Dogs', 'Logs']
# sizes = [15, 30, 45, 10]
# # plt.pie(sizes, labels=myLabels)
# # plt.pie(sizes, labels=myLabels, autopct="%.1f%%")

# explode = (0, 0.1, 0, 0) # only "explode" the 2nd slice (i.e. 'Hogs')
# # explode
# plt.pie(sizes, explode, labels=myLabels, autopct="%.1f%%")

# plt.show()











# Numpy Example #1

# create data
# x = np.arange(5)
# print(x)
# y1 = [34, 56, 12, 89, 67] # blue bars
# y2 = [12, 56, 78, 45, 90] # orange bars
# width = 0.40
# # plot data in grouped manner of bar type
# plt.bar(x-0.2, y1, width)
# plt.bar(x+0.2, y2, width)
# plt.show()







# Numpy Example #2

# create data
# x = np.arange(5)
# y1 = [34, 56, 12, 89, 67]
# y2 = [12, 56, 78, 45, 90]
# y3 = [14, 23, 45, 25, 89]
# width = 0.2
# # plot data in grouped manner of bar type
# plt.bar(x-0.2, y1, width, color='cyan')
# plt.bar(x, y2, width, color='orange')
# plt.bar(x+0.2, y3, width, color='green')

# plt.xticks(x, ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'])
# plt.xlabel("Team Names")
# plt.ylabel("Scores")
# plt.legend(["Round 1", "Round 2", "Round 3"])
# plt.show()





# Pandas Dataset (of countries): 
# https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv
# import pandas as pd


# Read the data from CSV files
# data = pd.read_csv("countries.csv")
# print(data.loc[0])

# - Head only reads the first 5 lines
# data = pd.read_csv("countries.csv")
# print(data.head(5))

# Isolate Column
# data = pd.read_csv("countries.csv")
# print(data["year"])

# data = pd.read_csv("countries.csv")
# # print(data)
# US = data[data["country"] == 'United States']
# print(US.year)
# plt.plot(US.year, US.population)
# plt.xlabel("Years")
# plt.ylabel("Population")
# plt.title("US Population")
# plt.show()
















# Multiple Plots

# data = pd.read_csv("countries.csv")
# US = data[data["country"] == 'United States']
# China = data[data["country"] == 'China']
# plt.plot(US.year, US.population)
# plt.plot(China.year, China.population)
# plt.xlabel("Years")
# plt.ylabel("Population")
# plt.title("US vs China Population")
# plt.legend(['US','China'])
# plt.show()




