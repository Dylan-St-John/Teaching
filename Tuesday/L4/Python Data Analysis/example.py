# import matplotlib
# matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2 * np.pi)
y1 = np.cos(x)
y2 = np.sin(x)
y3 = -1 * np.sin(x)
y4 = -1 * np.cos(x)


plt.plot(x, y1)
plt.plot(x, y2)
plt.plot(x, y3)
plt.plot(x, y4)
plt.plot
plt.show()

# fig = plt.figure()
# fig.savefig("sine_curves")
