# express-timer-test
 testing ibm cloud timer

IBM cloud can build a container from an image, but we still need a Dockerfile. I ought to learn hwo to write them myself, I'm not sure if I trust chatgpt. Especially when I create a larger application.

This code runs on an http request. Right now I have sample lines to be run when the timer request is sent via IBM Code Engine. I need to figure out whether this trigger is a GET or POST request. Currently, I can run the express app from the command line and use my browser to send a GET request. with just a GET request and nothing else in the query, "Hello World" is displayed and a datetime is sent to the console. Same deal with adding '/trigger' to the query, but the console also logs that it was a get request. Postman would likely also show me my expected result from a POST request, but I need to test it from IBM. Also need to set up logging.
