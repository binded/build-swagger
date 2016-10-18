#!/usr/bin/env node

import { argv } from 'yargs'

import buildSwagger from '../'

const build = async () => {
  try {
    await buildSwagger(argv)
    console.log('Built swagger.json')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

build()
