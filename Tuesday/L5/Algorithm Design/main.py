# 1) What is the definition of an algorithm? 
# --> A process or set of rules to be followed for problem-solving 
# operations by a computer

# Can you name an example with steps?
# --> A recipe
# --> functions
# --> crafting

# --> morning routine
# 1) Wake up and go to the bathroom
# 2) Brush my teeth and do my hair
# 3) Get dressed and make my bed
# 4) Have breakfest + coffee

# --> Putting away clean laundry
# 1) Grab a piece of laundry
# What type of laundry did I grab?
# --> different process of folding depending on what I grabbed

# 2) When creating an algorithm, what steps should you take
# to implement it? 

# --> Be hesitant to just start implementing it before 
#  you're finished making it
# --> define the problem: What are we trying to achieve?
# --> document steps to solve said problem (psudeocode)
# --> Turn psuedcocode to actual code
# --> Test your algorithm!

# Whats the difference between a good algorithm and a bad one?
# CPU vs GPU
# Central Processing Unit
# --> 6 - 12 really efficient workers
# Graphics Processing Unit
# 1000 - 3000 kinda dumb low quality workers

# ALGORITHM ANALYSIS
# --> The act of evaluating how quickly an algoriothm will operate based
# on a wide range of inputs

# TWO DIFFERENT CORE IDEAS TO ALGORITHM ANALYSIS:
# 1) Time Complexity 2) Space Complexity

# TIME COMPLEXITY
# --> The amount of computer time taken to run an algorithm

# SPACE COMPLEXITY
# --> How much total space an algorithm will take based on the input size

# WHEN ANAYLSING, WE HAVE TO TAKE INTO CONSIDERATION:
# a) Best Case
# b) Average Case
# c) Worst Case

# Asymptotic Notation
# BIG O NOTATION (Bachmann-Landau notation)
# O(n)

# HORRIBLE EFFICIENCY:
# O(n!) 
# i.e. 10! = 10 * 9 * 8 * 7 * .. 1
# O(2^n) --> 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
# O(n^2) --> 1, 4, 9, 16, 25, 36
# O(n log n)
# O(n) --> THIS IS STANDARD TIME
# O(log n) --> We reach a point where we plateu, the input could be massive
# and it wouldnt much much
# O(1) --> no matter the size of the input, it will always only take 1 step




















































# TIME COMPLEXITY ANALYSIS (What will the Big O notation be for these 
# pieces of code):
# 1) 
# n = 1000
# for counter in range(n):
#     print(counter)

# ANSWER: Time Complexity: O(n)

# 2) 
n = 20
for counter in range(n):
    for second_counter in range(n):
        print("First Loop: " + str(counter) + " Second Loop: " +
              str(second_counter))

# O(n^2)
# 3)
# n = 10
# i = 1
# while i < n:
#     print(i)
#     i *= 2















































# SPACE COMPLEXITY ANALYSIS:
# 1)

def get_z(a, b, c):
   z = a + b + c
   return z

print(get_z(3, 10, 5))

# 3 integers for a, b, c, z and the return value
# 4 bytes = integer, 4*4 + 4 = 20 bytes 
# SPACE COMPLEXITY: O(1) --> always gonna be 20 bytes 

# 2) 
# n is the length of array a[]
# def sum(a, n):
#     # 4 * n for our  array
#     x = 0 # 4 bytes for x
#     for i in range(n): # 4 bytes for i
#         x = x + a[i]
#         # 4 bytes for x
#     return x # 4 bytes for return value

# 3)
# def fibonacci(n):
# x = 0
# y = 1
# if n == 0:
    # return x
# if n == 1:
    # return y
# for i in range(2, n + 1):
    # z = x + y
    # x = y
    # y = z
# return z
