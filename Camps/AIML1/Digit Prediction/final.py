# TensorFlow and tf.keras
import tensorflow as tf

# Helper libraries
import numpy as np
import matplotlib.pyplot as plt

mnist = tf.keras.datasets.mnist

# Split the dataset into training and testing data
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

train_images = train_images / 255.0
test_images = test_images / 255.0

# Setup Layers
model = tf.keras.Sequential([
    tf.keras.layers.Flatten(input_shape=(28, 28)),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10)
])

# Compile the model
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
# Feed and train the model
model.fit(train_images, train_labels, epochs=10)

probability_model = tf.keras.Sequential([model,tf.keras.layers.Softmax()])

# Evaluate the 10000 test images and make predications
predictions = probability_model.predict(test_images)

label = np.argmax(predictions[100])
print("Model predicts: ", test_labels[label])

# Check 
plt.figure()
plt.imshow(test_images[100])
plt.colorbar()
plt.grid(False)
plt.show()