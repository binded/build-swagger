#!/usr/bin/env node

import buildSwagger from '../'

const build = async () => {
  try {
    await buildSwagger()
    console.log('Built swagger.json')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

build()
