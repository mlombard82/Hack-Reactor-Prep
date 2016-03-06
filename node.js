
// Node.js is a platform for running JavaScript on the server. Rather than use server-side 
// languages like PHP or Python, you can use JavaScript. After introducing Node.js, Brian 
// walks through a “Hello World” exercise.

// node.js takes Google Chrome’s JavaScript engine (V8) and uses it to control libenv, a library
//  that allows you to create and run a server. It’s super rad and pretty fast.

//  We’re going to use JS to code the server. This is useful because you only need to learn
//   one language
// You’re using node.js instead of Python, Ruby, Java, PHP, etc.
// node.js is quite different from other server-side languages.

// hello world app with Brian Holt

// the 'require' bit means: node, i know you have a library called http. please give it to me. 
// so, go out, fetch the http library and give it to me. And then we are going to use that to create
// our little web server.
// (note: there are others like 'fs' and other useful things that node includes for you to use)

// req: request
// res: response
// 127.0.0.1: is the way computers have to refering to themselves. it is kind of a magic number.
// not even Brian knows exactly what it means




// npm 
// he Node Package Manager helps manage third-party libraries in Node.js. 
// With a simple command line statement, a Node module will be downloaded and saved in your project. 
// Brian demonstrates this by adding nodemon: A module that automatically restarts the Node.js server when a change is detected.

// to see how this is useful we changed World for Minnesota. but then, the page doesn't automatically
// reload. you have to stop the server (control + C), then load again (node app.js)


typed command 'sudo' which means switch user and then do.
instead of: npm install -g nodemon
     i did: sudo npm install -g nodemon

// Like jQuery, Express makes writing JavaScript much easier. However, Express is specific
//  for creating Node.js server applications. Brian installs the Express framework and uses it
//   to recreate the Hello World application.

// it codes essentially the same Hello [city] app we wrote before, but now in Express. 

// on your website you want to route especific things to especific places. yo want your index to be
// different than your about page, different than your contact page. you want to have different
// routes on your web server. and Express makes that easy. in this example, every time you go to
// my website /hello.txt, serve them 'Hello world'



// In this exercise, you will create an application that has two routes: cheer.txt and jeer.txt. 
// Cheer.txt will return something positive while jeer.txt will return something negative.

var express = require('express'); //bringing in Express
var app = express(); //creating a new instance of Express

app.get('/cheer.txt', function(request, response){
  response.end('You have quite lovely eyes.');
});

app.get('/jeer.txt', function(request, response){
  response.end('Your mother was indeed a hampster.');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});





