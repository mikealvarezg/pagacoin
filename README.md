# Pagacoin

Pagacoin is an admin web app designed to help admin users to create transactions between the wallets of the different users.

## Overview 

1. Back-end

The API has been developed with Spring, a Java framework which makes faster the programming proccess using different annotations. The code is built by Maven which also generates the artifact to launch the server.

The code has been organized with controllers to receive the requests, then a service layer handles the business logic and finally the repository access to data. The relational data is managed by JPA and hosted on a h2 in-memory database. You can get more documentation with the Swagger link below.

2. Front-end

React has been the framework used for this part, it allows you to build encapsulated components that manage their own data and then reuse them to make complex UI. The app has been written on TypeScript language, which provides a way to add the typing to JavaScript, providing code validation.

Redux centralizes the application's data and logic, enabling to set and get the data on any part of the code.

Another dependency which has been used is Axios, a promised based HTTP client to get the data from the API and Material-UI, a CSS framework to build the UI.

3. Docker

The application has been dockerized with a Dockerfile for the back and another for the web part, to create two containers on any local machine with Docker installed. This process is orchestrated with docker-compose, it simplifys to use a database or add other components to the architecture in the future.

The most comfortable way to access the project is by deploying it with Docker, but also you can deploy on local environment.

See **Deployment** section.

### Pre-requisites 📋

Node *v14.15.5*

Java *15.0.2-jdk*

Docker

### Setup 🔧

You can set up the application on your local environment:

1. Go to **pagacoin-front** folder and execute:

```
npm install
```

```
npm start
```

2. Go to **pagacoin-api** folder and execute:

Windows

```
mvnw spring-boot:run
```

Mac, Linux

```
./mvnw spring-boot:run
```

## Documentation

Swagger

```
[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
```

## Deployment 📦

Set Git auto CRLF to false 

```
git config core.autocrlf false
```

Execute this commmand from the main project folder **pagacoin**

```
docker-compose up
```

## Technology 🛠️

* Spring
* Java
* Swagger

* React
* TypeScript
* Redux
* Hooks
* Axios
* Material-UI

* Docker

## Developer ✒️

* **Miguel Álvarez Granado** - [mikealvarezg](https://github.com/mikealvarezg)
