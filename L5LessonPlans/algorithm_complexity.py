# NOTES:
# Hello! Question:

# "What is an algorithm? What are some important aspects of one? Give an example."
# - An algorithm "does something"
# An algorith is "a process or set of rules that are to be followed in calculates or other problem-solving operations by a computer"
# An algorithm should produce the correct result
# BONUS: Do you know any sorting algorithms?
# --> Sorting algorithms are to organise (usually a list)


# EXAMPLE: MORNING ROUTINE
# 1) Alarm wakes me up and I have to turn it off
# 2) Brush my teeth and go to the bathroom
# 3) Make my bed
# 4) Make some food and coffee

# What differentiates a good algorithm from a bad algorithm?
# 1) Number of steps
# 2) Less complexity
# 3) Better visualisation

# 2 CENTRAL THEMES:

# 1) Time complexity
# --> the computational complexity that describes the amount of computer time it takes to run an algorithm (the time taken to execute each statement of code in an algorithm)
# 2) Space complexity
# --> the total space taken by the algorithm with respect to the input

# ALGORITHM ANALYSIS: The act of evaluating how quickly the algorithm will operate
# based on the range of inputs
# --> Algorithms have 3 following cases: best case, average case, and worst case to consider
# when trying to optimize
# --> Certain algorithms are more efficient than another based on the size of the problem
# and the size of the input

# ASYMPTOTIC NOTATION
# --> f(n)
# --> BIG O NOTATION: O(n)
# --> Big O Notation is used in algorithm analysis to aid in determining what is know an "limiting behaviour" of the function that applies to your algorith, Its used to classify algorithms according to limits on runtime or input size.


# TIME COMPLEXITY EXAMPLES
for i in range(0, 100):
  # LOGIC
# There are 100 elements
# Therefore, notation is O(100)

for val in lst:
  # LOGIC  
# There are len(lst) elements,
# Therefore, notation would be 0(n)

for i in range(0, n):
  for j in range(0, n):
    # LOGIC

# O(n^2)


import random
# SPACE COMPLEXITY EXAMPLES:


#1) 
def get_z(a,b,c):
  z = a + b+ c
  return z
# Each variable is an int, so it stores its information in 4 bytes (8 bits)
# in total, the memory requirement would be 4(4) + 4 = 20 bytes
# O(1) because memory is consistent - it will never be more or less than 20 bytes


#2)
# n is the length of array a[]
def sum(a, n):
  x = 0 # 4 bytes for x
  for i in range(n): # 4 bytes for i
      x = x + a[i]
  return x
# total memory requirement: 
# 4*n for the array a[] elements
# 4 bytes each for x, n, i and the return x
# Hence, total = 4n + 16, increasing linearly 
# O(n) - linear growth. Space will grow as input n grows


# 3)
def create_list():
  nums = []
  for i in range(10):
    nums.append(random.randint(-1000, 1000))
  return nums
  
def swap(lst, i1, i2):
  temp = lst[i2]
  lst[i2] = lst[i1]
  lst[i1] = temp
  
def bubble_list(lst):
  for i in range(1, len(lst)):
    j = i - 1
    while j >= 0:
      if lst[j + 1] < lst[j]:
        swap(lst, j+1, j)
    j -= 1

# Time complexity: 
# best case: O(n)
# average case: O(n^2)

#1, whats the time complexity?
for i in range(n):
  print(i)

#2, whats the time complexity?
for i in range(n):
  for j in range(n):
    print(i)

#3 Whats the time complexity?
i = 1
while i < n:
    print(i)
    if i == 1:
      i = i + 1
    else:
      i *= 2 # this means to the power of 2

#4 Whats the space complexity?
def fibonacci(n):
  x = 0
  y = -1
  if n== 0:
    return x # base case
  if n == 1:
    return y # another base case
  for i in range(2, n+1):
    z = x+ y
    x = y
    y = z
  return z