## M.E.A.N Stack

MEAN is a framework for an easy starting point with [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. It is designed to give you a quick and organized way to start developing MEAN based web apps with useful modules like Mongoose and Passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.



## NOTES

I created this boilerplate because I wanted something easy and fast to start off with. I designed it so that it can be easily modified and used to bootstrap MEAN stack project development. To get started, simply clone this repository, get mongoDB running and edit the config.js file then run the following command on your terminal. $ npm install && node app.js.
This MEAN STACK boilerplate follows the MVC (Model View Controller) design pattern. We will talk more on the file structure later.

This MEAN STACK boiler plate contains a sample app built on it. The sample app displays some basic technologies behind the MEAN stack. This sample app uses, AngularJS and Angular UI-Router module to create a Single Page App (SPA). Read More On That.


## Prerequisites
* *MongoDB* - <a href="http://www.mongodb.org/downloads">Download</a> and Install mongodb - <a href="http://docs.mongodb.org/manual">Checkout their manual</a> if you're just starting.
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.

```bash
$ curl -sL https://deb.nodesource.com/setup | sudo bash -
$ sudo apt-get update
$ sudo apt-get install nodejs
```


## Installation
First! you have to clone this repository. After that install the dependencies using NPM, and that’s all.

### Install the Dependencies

```bash
$ cd <myApp>
$ npm install 
```

### Starting Up

```bash
$ node app.js 
```


## Technologies

### The MEAN stack

MEAN is an acronym for *M*ongo, *E*xpress.js , *A*ngular.js and *N*ode.js

<dl class="dl-horizontal">
<dt>MongoDB</dt>
<dd>Go through MongoDB Official Website and proceed to its Great Manual, which should help you understand NoSQL and MongoDB better.</dd>
<dt>Express</dt>
<dd>The best way to understand express is through its Official Website, particularly The Express Guide; you can also go through this StackOverflow thread for more resources.</dd>
<dt>AngularJS</dt>
<dd>Angular's Official Website is a great starting point. CodeSchool and google created a <a href="https://www.codeschool.com/courses/shaping-up-with-angular-js">great tutorial</a> for beginners, and the angular videos by <a href="https://egghead.io/">Egghead</a>.</dd>
<dt>Node.js</dt>
<dd>Start by going through Node.js Official Website and this StackOverflow thread, which should get you going with the Node.js platform in no time.</dd>
</dl>

### Additional Tools
* <a href="http://mongoosejs.com/">Mongoose</a> - The mongodb node.js driver in charge of providing elegant mongodb object modeling for node.js
* <a href="http://getbootstrap.com/">Twitter Bootstrap</a> - The most popular HTML, CSS, and JS framework for developing responsive, mobile first projects.
* <a href="http://angular-ui.github.io/bootstrap/">UI Bootstrap</a> - Bootstrap components written in pure AngularJS



## File Structure

Here is a detailed instruction on this boilerplate file structure. You should adhere and have basic understanding of this file structure system, for better coding experience. 

* app.js : app.js is the application’s server. It is the entry point to our application.
* config/ : The config folder contains series of configuration files.
  * config/db.js : In this file you set the URI to your mogoDB  server
  * config/middlewares.js : This file contains the predefined middle wares used by Express.js. It is also here that you will add all the middle wares you want to use in your app.
  * config/prefences.js : This file contains settings of your Express JS app. Here you can also add your settings. i.e you can set your app's view template engine, by default this boiler plate uses pug. You can change, and install the template engine of your choice.
* controllers/ : The controllers folder contains all controllers that would be used by your app. By default, there are two predefined controllers. Note that you don't need to explicitly include controllers in this folder because on startup, the application automatically loads them.
  * controllers/api.js : This is where all tour REST API routes resides.
  * controllers/index.js : This  file contains the routes of your index homepage index.
* models/ : This is where your applications model resides. There is a sample file inside this folder that gives you the insight of what should be contained in this folder. the stack.js file in this folder contains schema named stack that will be used to build the Stack model.
* public/ : This is where your static content resides.
* views/ : This is where your application views reside.



## License
This project is licensed under the MIT LICENSE.

