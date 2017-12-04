[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# NodeJS with Babel

Read more about Babel from [here](https://babeljs.io/).

## Clone

```bash
git clone https://github.com/alextanhongpin/node-rest.git
git remote rm origin
git remote add origin <your-git-path>
```

## Onion Architecture

![Onion Architecture](/assets/onion_architecture.png)

The architecture is based on the principle of [Dependency Inversion](https://dzone.com/articles/perfecting-your-solid-meal-with-dip). There are layers wrapping around each circle, forming the famous *onion*. Between the layers of the Onion, there is a strong _dependency rule_: **outer layers can depend on lower layers, but no code in the lower layer can depend directly on any code in the outer layer**. 

Note that the database is not center, it is **external**. The moment you grasped this concept, you have grasped the onion architecture. 

## .babelrc

Here you can specify the version of nodejs that you want the code to compile to. Since we are using AWS Lambda, we want the code to compile to nodejs version `6.10` (7 November 2017). If you are not bounded by this limitation, always use the current version:

```
{
  "presets": [
    ["env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}
```

## Installation

First, you have to install [Yarn](https://yarnpkg.com/lang/en/docs/install/). Then:

```bash
# This will install all dependencies from package.json
$ yarn install

# We use foreman to load the environment variables from `.env` file.
# This is important to prevent accidental commit of sensitive data to github
$ yarn global add foreman
```

## Add/Remove packages

```bash
$ yarn add <PACKAGE_NAME>
$ yarn add --dev <PACKAGE_NAME>
$ yarn remove <PACKAGE_NAME>
```

## Environment

For development, store all the environment variable in the `.env` file. This will be included in `.gitignore` so that it will not be commited to github.
Make sure you create the `.env` file or the service will not run.

The `.env` should contain the following:
```bash
DB_USER=user
DB_PASS=123456
DB_NAME=testdb
DB_HOST=localhost

FOOD_SERVICE=true
```

# Stop MySQL from your local

Any running MySQL will prevent the app from connecting to the docker container.

If you don't stop the MySQL, the following error might appear:
```bash
$ error 1044 (42000): access denied for user
```

# Starting the docker image with MySQL DB
```bash
$ docker-compose up -d
```

## Start

```bash
$ nf start
```

## Test

You can use any reporters that are supported by istanbul: `clover`, `cobertura`, `html`, `json-summary`, `json`, `lcov`, `lcovonly`, `none`, `teamcity`, `text-lcov`, `text-summary`, `text`.

```
$ yarn test
```

## Report

```
$ yarn cover
```

## Build

```
$ yarn build
```

## Create a Table

```sql
CREATE TABLE food (
    id int NOT NULL,
    name varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);
```

