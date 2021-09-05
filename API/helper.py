def convertToIntList(l):
	# Function to convert an array of strings to an array of ints

	new = []
    
	for item in l:
		new.append(int(item))
        
	return new
    
def getPredictions(data):
	from os import listdir, path
	from sklearn.linear_model import Perceptron
	from joblib import load
    
	predictions = {}
	models = listdir("models") # Gets a list of the files in the 'models' folder
    
	for model_name in models:
		model = load(path.join("models", model_name)) # Load the model
		prediction = model.predict([data])[0] # Make the prediction

		predictions[model_name] = int(prediction) #  
		
	return predictions
