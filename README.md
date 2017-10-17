# NodeJS with Babel
Read more about Babel from [here](https://babeljs.io/).
## Installation

First, you have to install [Yarn](https://yarnpkg.com/lang/en/docs/install/).

Then:
## Installation

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

# starting the docker image with MySQL DB.
`docker-compose up -d`

## Start

```bash
$ nf start
```


## Test

```
$ yarn test
```

## Build

```
$ yarn build
```

## Environment

For development, store all the environment variable in the `.env` file. This will be included in `.gitignore` so that it will not be commited to github.

```bash
DB_USER=user
DB_PASS=user-pass
DB_NAME=test-db
DB_HOST=localhost

FOOD_SERVICE=true
```
