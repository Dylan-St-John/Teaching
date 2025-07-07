# 1) What is the definition of an algorithm? Can you name an 
# example with steps?
# --> series of steps to complete something
# EXAMPLE: Making food
# EXAMPLE: Morning routine

# 2) When creating an algorithm, what steps should you take
# to implement it? What are things / ideas we should consider?
# Whats the difference between a good algorithm and a bad one?
# --> Good algorithms are efficient 
# (time takes and the resources required)

# --> CPU (Central Processing Unit) v.s. GPU (Graphics Processing
# Unit)

# CPU is good at dealing with any tasks, but it has few workers
# i.e. it has 10 workers at subway, and they make artisan level
# sandwhiches


# GPU is not as good as the CPU, but it has WAY more workers  
# GPUs are only good when given similar tasks
# i.e. it has 5000 subway workers that are good at only specific
# tasks like 1000 of them are good enough to grab bread and cut
# it in half

# A FEW THINGS TO CONSIDER WHEN DESIGNING AN ALGORITHM:
# a) Take time to consider the problem / define what the problem
# is
# b) Document steps to solve the problem in psuedocode
# c) Convert my psuedocode to code and test it

# THE BIGGEST TAKEAWAY: 
# When comparing or creating algorithms, its best to use
# algorithm analysis to determine how good the solution

# --> Algorithm analaysis the act of evaluating how quickly
# an algorithm will operate based on a range of inputs

# --> Time complexity v.s. Space complexity
# Time complexity is the computational complexity that describes
# the amount of computer time it takes to run an algorithm

# Space complexity is the total space taken by the algorithm
# with respect to its input size

# When analysing algorithms, we need to consider:
# 1) BEST CASE
# 2) AVERAGE CASE
# 3) WORST CASE

# BIG O NOTATION (Bachmann-Landau):
# O(n)
# --> aids in determining limiting behaviour of a function
# O = Oh notation
# n = the steps taken to execute the algorithm

# O(n) ==> linear time
# O(log(n)
# O(1) --> flat time
# O(n2)

































# TIME COMPLEXITY ANALYSIS:
# 1) 
# for counter in range(100):
    # print(counter)

# O(n), linear time


# 2) 
n = 2
for counter in range(n):
    for second_counter in range(10):
        print(second_counter)
# O(n^2)

# 3)
# n = 100000
# i = 1
# while i < n:
#     print(i)
#     i *= 2










# SPACE COMPLEXITY ANALYSIS:
# 1)

# def get_z(a, b, c):
#    z = a + b + c
#    return z

# print(get_z(3, 10, 5))
# --> all 3 of these numbers are integers
# --> an integer is 4 bytes (32 bits)
# 4 bytes, 4 integers 
# (4(4)+4) = 20
# O(1) --> Constant Space Complexity


# 2) 
# n is the length of array a[]
# def sum(a, n):
#     # 4 * n for our  array
#     x = 0 # 4 bytes for x
#     for i in range(n): # 4 bytes for i
#         x = x + a[i]
#         # 4 bytes for x
#     return x # 4 bytes for return value

# TOTAL MEMORY REQUIREMENT: (4n + 12)
# O(n) --> Linear Space Complexity

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
