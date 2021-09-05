from sklearn import svm
import csv
from os import path

with open("dataset.csv", "r") as dataset:
	reader = csv.reader(dataset)
	next(reader) # Skip over first row as it contains the headers and no data

	data = []

	for row in reader:
		data.append([[int(i) for i in row[:20]], int(row[20])]) # First 20 items are the 'evidence' and the last item is the 'label'

x_data = [row[0] for row in data]
y_data = [row[1] for row in data]

# Create and fit the model with the data
model = svm.SVC()

model.fit(x_data, y_data)

# Store the model
from joblib import dump
dump(model, path.join("compiledModels", "SVM"))