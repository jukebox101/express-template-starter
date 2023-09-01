// Tell Node that you need to use the express module 
// AND the body-parser module
// Do that here...
let express = require('express');
let bodyParser = require('body-parser');
// Initialize an array named 'data' to an empty array
// Do that here...
let data = [];
// Let the variable 'app' represent the express object
// that you'll use to call express methods
// Do that here
let app = express();
// This line tells express to use the ejs rendering engine
app.set('view engine', 'ejs')

// These lines tell express to parse JSON data and
// that data coming from the client (that ejs page we saw
// entered in the form) will be unencoded (plain text)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

// Code express responding to a get request
// from the root (/), using args (req, res)
// Just code the top line that responds to the request
app.get('/', (req, res) => {

// Code that here
    // This code tells ejs to render the page home.ejs
	// in the views directory
	res.render("home", {
		data: data
	})
}) // I closed out the call to get for you here


// Code express responding to a post request
// from the root (/), using args (req, res)
// Just code the top line that responds to the request
app.post('/',  (req, res) => {
	// req.body is the object representing the body of the post
	// request. Here, we assign the data from the form to
	// the elements of the array 'data'
	// Note that inputTitle and inputContent are the NAMES (not IDs)
	// of the input form elements
	const inputTitle = req.body.inputTitle
	const inputContent = req.body.inputContent
	// Use the JavaScript push method of arrays to add
	// an object with two property/value pairs:
	// property = title, value = inputTitle
	// property = content, value = inputContent
	// Do that here
	data.push({
		title: inputTitle,
		content: inputContent
	})
	// This code tells ejs to render the page home.ejs
	// in the views directory
	res.render("home", {
		data: data
	})
}) // I closed out the call to get for you here

// Start an express server on port 3000
// Do that here
app.listen(3000, (req, res) => {
	console.log("App is running on port 3000")
})