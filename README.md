# build-swagger

[![Build Status](https://travis-ci.org/blockai/build-swagger.svg?branch=master)](https://travis-ci.org/blockai/build-swagger)

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
build-swagger
```