# User Search App

### Trello board tasks management

https://trello.com/b/58hOnlEB/user-search-zendesk

This repository is for searching user using [React](https://nestjs.com), [Redux](https://redux.js.org/), [Styleguidist](https://react-styleguidist.js.org/) framework.

Below is the test coverage summary for this repo

| Statements                                    | Branches                                  | Functions                                   | Lines                               |
| --------------------------------------------- | ----------------------------------------- | ------------------------------------------- | ----------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-2.5%25-red.svg) | ![Branches](https://img.shields.io/badge/Coverage-0%25-red.svg) | ![Functions](https://img.shields.io/badge/Coverage-11.11%25-red.svg) | ![Lines](https://img.shields.io/badge/Coverage-2.7%25-red.svg) |

### 1. Build container
```sh
docker-compose build
```
Ensure that [Docker is installed and running](https://www.docker.com/products/docker-desktop) on your work station

### 2. Start container

```sh
docker-compose up
```

### 3. How to test it


```bash
# install node_modules for client
$ cd client
$ yarn

# unit tests with coverage
$ yarn test

# e2e tests (havent done yet)
$ yarn test:e2e
```

### 3. How to use frontend app

Code locates in `client` folder in this repo

Client url to run application

```
http://localhost:3000
```

The search bar will accept following search format

```
user; {"fieldname":"value"}
```

```
organization; {"fieldname":"value"}
```

```
ticket; {"fieldname":"value"}
```

Where `{fieldname}` is the field and `{value}` is the filter value

### 4. How to use backend app

Code locates in `server` folder in this repo

Backend url for REST API

```
http://localhost:8000
```

Available routes:
```
http://localhost:8000/v1/users
```
```
http://localhost:8000/v1/organizations
```
```
http://localhost:8000/v1/tickets
```