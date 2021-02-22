# Pagacoin

Pagacoin is an admin web app designed to help admin users to create transactions between the wallets of the different users.

## Comenzando 🚀

The easiest way to access to the project is by deploying it with Docker, but also you can deploy on local environment.

See **Deployment** section.

### Pre-requisites 📋

Node v14.15.5

Java 15.0.2-jdk

Docker

### Setup 🔧

You can set up the application on your local environment:

1) Go to pagacoin-front folder and execute:

```
npm install
```

```
npm start
```

2) Go to pagacoin-api folder and execute:

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
http://localhost:8080/swagger-ui.html
```

## Deployment 📦

Set Git auto CRLF to false 

```
git config core.autocrlf false
```

Execute this commmand from the main project folder (pagacoin)

```
docker-compose up
```

## Technology 🛠️

Back

* Spring

Front

* React
* TypeScript
* Redux
* Hooks
* Axios

## Developer ✒️

* **Miguel Álvarez Granado** - [mikealvarezg](https://github.com/mikealvarezg)
