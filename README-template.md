# User Search App

### Trello board tasks management

https://trello.com/b/58hOnlEB/user-search-zendesk

This repository is for searching user using [React](https://nestjs.com), [Redux](https://redux.js.org/), [Storybook](https://storybook.js.org/) framework.

Below is the test coverage summary for this repo

| Statements                                    | Branches                                  | Functions                                   | Lines                               |
| --------------------------------------------- | ----------------------------------------- | ------------------------------------------- | ----------------------------------- |
| ![Statements](#statements# "Make me better!") | ![Branches](#branches# "Make me better!") | ![Functions](#functions# "Make me better!") | ![Lines](#lines# "Make me better!") |

### 1. Install app

```sh
yarn install
```
Ensure also that [Docker is installed](https://docs.docker.com/engine/install) on your work station

### 2. Install docker container

```sh
docker-compose build 
```

### 3. Start docker container

```sh
docker-compose up -d
```

### 4. How to run it


You can runs the app in the development mode.<br>

```sh
yarn start
```

### 5. How to test it

```bash
# unit tests with coverage
$ yarn test

# e2e tests
$ yarn test:e2e
```

Launches the test runner.<br>


### Useful Command

Show server error log

```bash
docker-compose logs
```

List all docker image
```bash
Docker image ls
```

Clean up unused docker image
```bash
Docker image prune -a
```