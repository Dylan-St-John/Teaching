import pandas as pd
#import libraries
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt


#Reading data from csv file
df=pd.read_csv('https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv')

print(df)
print(df.head(5)) 
#Prints first 5 observations

#get the columns of the data
print(df.columns)

#printing the column
print(df['director_name'])
print(df[['director_name','num_critic_for_reviews']])

#imdb_score is more than 7.5
rating = df[df['imdb_score'] >7.5]
print(rating)




#Total countries on IMDB
country = df['country'].value_counts()
print(country)

#Gross income by directors and sort by values
df_gross = df.groupby('director_name')['gross'].sum()
print(df_gross.sort_values(ascending=False).head(20))

# Number of movies released every year
df_movies_year = df.groupby(['title_year'])['movie_title'].count()
print(df_movies_year)

#Calculate unique language
print(df['language'].unique())






#Read File
df=pd.read_csv('https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv')

#prepare a graph:
fig=plt.figure(figsize=(11,8))

#Actors with the highest Facebook likes
actor=df.groupby(["actor_1_name"])["actor_1_facebook_likes"].sum().sort_values(ascending=False)

# select top ten actors and draw horizontal bar graph(barh)or bar
actor[:10].plot(kind='barh')

#save file
fig.savefig('actor.png')







df=pd.read_csv('https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv')
fig=plt.figure()
sizes = df["director_name"].value_counts()[:15]
print(sizes)
colors = ['turquoise','orange','lightgreen','red','purple','pink','grey','yellow','purple','yellowgreen',
'gold', 'lightskyblue', 'lightcoral','black','blue']
plt.pie( sizes, colors=colors)
plt.legend(sizes.index, loc =3)
plt.title('% of directors total movies')
plt.show()
fig.savefig("pie.png")







matplotlib.use('Agg')
df=pd.read_csv('https://raw.githubusercontent.com/cwkteacher/Data/master/movie_metadata.csv')
df['imdb_score'] = df.imdb_score.fillna(0)
df['title_year'] = df.title_year.fillna(0)
df = df[df.imdb_score>0]
df = df[df.title_year>0]
fig=plt.figure()
legend = []
dire = ['Peter Jackson','Steven Spielberg' ,"Ridley Scott","Alfred Hitchcock","John Ford"]
for dir in dire:
    plt.scatter(df.imdb_score[df.director_name==dir],df.title_year[df.director_name==dir])
    legend.append(dir)
plt.legend(legend, loc =3)
plt.title('Can we separate directors rating')
plt.xlabel('Rating')
plt.ylabel('year')
plt.show()
fig.savefig("director.png")