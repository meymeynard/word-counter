# A Simple Word Counter Node App

A simple app that counts the words of the message that you submit.

## Install Dependencies

### On Ubuntu

#### NodeJS

Fore more info just check their installation instructions, [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

    $ apt-get install nodejs npm

#### MongoDB

For more info just check their installation instructions, [here](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/).

    $ apt-get install mongodb-org

### Project Dependencies

Go to the project root directory and then run,

    $ npm install

## Server

### To start the database server

First, specify / create a directory in which you will placed your MongoDB files. (This time it's `/project_dir/data/`)

    $ mongod --dbpath data

Once it says "[initandlisten] waiting for connections on port 27017", you're good.

### To start the server

Go to the project root directory and then run,

    $ npm start

Then go to `localhost:3000`.
