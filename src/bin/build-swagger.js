#!/usr/bin/env node

import { argv } from 'yargs'

import buildSwagger from '../'

const build = async () => {
  try {
    const { jsonPath, data } = await buildSwagger(argv)
    if (jsonPath) {
      console.log(`Built ${jsonPath}`)
    } else {
      console.log(data)
    }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

build()
