import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

fashion_mnist = tf.keras.datasets.fashion_mnist
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()

class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress','Coat', 'Sandal', 'Shirt', 'Sneaker',
'Bag', 'Ankle boot']

train_images = train_images / 255.0
test_images = test_images / 255.0

# Setup Layers
model = tf.keras.Sequential([
tf.keras.layers.Flatten(input_shape=(28, 28)),
tf.keras.layers.Dense(128, activation='relu'),
tf.keras.layers.Dense(10)
])

# Compile the model
model.compile(
    optimizer='adam',
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics=['accuracy']
)

# Feed and train the model
model.fit(train_images, train_labels, epochs=10)

# Attach a softmax layer to convert outputs to probabilities - easier to interpret.
probability_model = tf.keras.Sequential([model,tf.keras.layers.Softmax()])

# Evaluate the 10000 test images and make predications
predictions = probability_model.predict(test_images)
print(predictions[400])

label = np.argmax(predictions[400])
print("Model predicts: ", class_names[label])

# Check
plt.figure()
plt.imshow(test_images[400])
plt.colorbar()
plt.grid(False)
plt.show()
