# Working with React and Node JS

## About the project

This project utlizes both react and node js to create a application which lists Douments contains Active Indicator, effective field etc.

React is used to render the front end (app) and renders on port 3000.
Node js is used to create the back end (server) which holds all the data.

A ajax request is called from the app to the server and then using the react map function, renders whole data onto the screen.

## Set up

To set up the project you need to install all the node modules in both of the projects

```sh
$ cd app
$ npm install
$ cd ../server
$ npm install
```

## Running the projects

For this to work you need to have both the node server and the react project running.

### Start the server

To start the server you need to call these commands

```sh
$ cd server
$ node index
```

This server should now be running on port 5000.

### Start the App

To start the app you need to call

```sh
$ cd app
$ npm start
```

This will start the react application on port 3000.

## Changing the data

If you want to change the data/api you connect to, you need to edit the src/App.js file within the app project.
If you arent using the ip address 192.168.33.10, you will also have to change the fetch url which is being called.
