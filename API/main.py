from flask import Flask, jsonify
from flask_cors import CORS
from helper import convertToIntList, getPredictions

app = Flask(__name__)
CORS(app)
cors  = CORS(app, resources={
	r"/*": {
		"origins": "*"
	}
})

@app.route("/")
def index():
	return "API for covidML"

@app.route("/<data>")
def api(data):
	data = data.split(",")

	try:
		data = convertToIntList(data) 
	except ValueError: # If there is a ValueError when converting from str array to int array, it means the data contains non-numerical values
		return jsonify(error="Error occured: Data provided doesn't only consist of integers")

	if len(data) != 20: # Check if there is the correct number of values
		return jsonify(error=f"Error occured: 20 arguments expected, {len(data)} provided")

	predictions = getPredictions(data)

	# Return the predictions in JSON-format
	return jsonify(
		Perceptron=predictions["Perceptron"], 
		SVM=predictions["SVM"],
		NeuralNetwork=predictions["NeuralNetwork"]
		)

app.run(host="0.0.0.0", port=8080)