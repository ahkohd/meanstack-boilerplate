## M.E.A.N Stack

MEAN is a framework for an easy starting point with [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. It is designed to give you a quick and organized way to start developing MEAN based web apps with useful modules like Mongoose and Passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.



## NOTES

I create this boilerplate because I wanted something easy and fast to start off with. I designed it so that it can be easily modified and used to bootstrap MEAN stack projects. To use it simply clone the repo, get mongoDB running and edit the config.js file then run the cms node app.js.I
This MEAN STACK boilerplate follows the MVC (Model View Controller) design pattern. We will talk more on the file structure latter.

This boiler plate contains a sample app built on it. This sample app displays some basic technologies behind the MEAN stack. This sample app uses, AngularJS and Angular UI-Router to create a Single Page App (SPA).


## Prerequisites
* *MongoDB* - <a href="http://www.mongodb.org/downloads">Download</a> and Install mongodb - <a href="http://docs.mongodb.org/manual">Checkout their manual</a> if you're just starting.
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.

```bash
$ curl -sL https://deb.nodesource.com/setup | sudo bash -
$ sudo apt-get update
$ sudo apt-get install nodejs
```


## Installation
First! you have to clone this repository. After that install the depenencies usin NPM, and taht's all.

### Install the Dependencies

```bash
$ cd <myApp>
$ npm install 
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

Here is a details instructin on this boilerplate file strcuture. You should adhere and have basic understanding of this file structure system, for better coding expirence. 

* app.js : app.js is the applictaion's server. It is the entry point to our appliaction.
* config/ : The config folder contains series of configurational files.
  * config/db.js : In this file you set the URI to your mogoDB server.config
  * config/middlewares.js : This file contains the predefined middlewares used by Express.js. It is also here taht you will add all the middlewares you want to use in your app.
  * config/prefences.js : This file contains settings of your Express JS app. Here you can aso set your own app setting here. i.e you can set your app view template engine, by default this boiler plate uses pug. you can change it, and install the template engine of your choice.
* contollers/ : The controllers folder contains all contollers that would be used by your app. By default, ther are two predefined comtollers.
  * contollers/api.js : This is where all tour RESTUful API routes resides.
  * contollers/index.js : This  file contains the routes of your index homepage index.
* models/ : This is where your applictaions model resides. There is a sample file inside this folder that gives you the insight of wht sould be contained in this folder. the stack.js file in this folder contains schema named stack that will be used to build the Stack model.
* public/ : This is where your staic content resides.
* views/ : This is where your aplication views reside.



## License
This project Is LICENSE under the MIT LICENSE. Read the LICENSE.txt

>>>>>>> 067a9c61ae6e33c1fd94865e5fde93ef4f37c1e6
