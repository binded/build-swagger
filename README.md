# build-swagger

[![Build Status](https://travis-ci.org/blockai/build-swagger.svg?branch=master)](https://travis-ci.org/blockai/build-swagger)

Simple wrapper around [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)

Builds a swagger.json based on a swagger.js specification file. By
default, tries to find `swagger.js` in `./swagger.js` and
`./src/swagger.js` and writes to `./swagger.json`.

## Install

```bash
npm install --save build-swagger
```

Requires Node v6+

## Usage

See [./test](./test) directory for usage examples.

```bash
build-swagger [--spec] [--jsonPath]
# by default, spec looks for ./swagger.js or ./src/swagger.js, and
# jsonPath is ./swagger.json

# example:
build-swagger.js --spec ./src/swagger.js --jsonPath myswagger.json
```