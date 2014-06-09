# A Simple Word Counter Node App

A simple app that counts the words of the message that you submit.

## Install Dependencies

### On Ubuntu

#### NodeJS

    $ apt-get install nodejs npm

#### MongoDB

    $ apt-get install mongodb-org

## Server

### To start the database server

First, specify / create a directory in which you will placed your MongoDB files. (This time it's `./data/`)

    $ mongod --dbpath data

Once it says "[initandlisten] waiting for connections on port 27017", you're good.

### To start the server

Go to the project root directory and then run,

    $ npm start

Then go to `localhost:3000`.
