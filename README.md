# Restful Employee Management

## Description

***

In this project, four different HTTP requests can be sent and received via a client

* The HTTP request is sent via a software that can test APIs
* This is then routed through the server and processed
* The appropriate action is performed in the MySQL database
* A response is sent to the software

## Preparation for using the API test software

***

To install and start the Restful Employee Management server, you have to enter the following commands into the terminal of Visual Studio Code in this directory

* `npm install`
* `npm run start`
* The code can be customized with prettier and eslint using the commands `npm run prettier` and `npm run lint`

## Setup of the MySQL database management system

***

* Download MySQL, install it and give the root user the password 1234
* Optionally create a specific user with their own password, in that case the. env file in the project must be modified
* Optional download and install MySQL workbench
* Create the database or schema employees

Create the table `contact_details` with the following columns

* `id`
* `firstName`
* `lastName`
* `email`
* `password`

## HTTP requests and supported URL

***

These requests are available in the project to URL `http://localhost:3000/contacts/`

* `get`
* `post`
* `put`
* `delete`
