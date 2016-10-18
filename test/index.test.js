import test from 'blue-tape'
import { join } from 'path'
import rimraf from 'rimraf'
import fs from 'fs'
import buildSwagger from '../src'

const readJSON = (path) => {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  } catch (err) {
    return
  }
}

test('setup', (t) => {
  rimraf.sync('./swagger.json')
  t.end()
})

test('build', async (t) => {
  const jsonPath = join(__dirname, 'swagger.json')
  await buildSwagger({
    spec: {
      swaggerDefinition: {
        info: {
          title: 'some title',
          version: '0.0.1',
        },
        basePath: '/v1',
      },
      apis: [],
    },
    jsonPath,
  })

  /* eslint-disable global-require */
  const result = readJSON(jsonPath)
  t.ok(typeof result.info === 'object')
  t.equal(result.info.version, '0.0.1')
  t.equal(result.info.title, 'some title')
})

test('build - spec is a path', async (t) => {
  const jsonPath = join(__dirname, 'swagger.json')
  await buildSwagger({
    spec: './swagger.js',
    jsonPath,
  })

  /* eslint-disable global-require */
  const result = readJSON(jsonPath)
  t.ok(typeof result.info === 'object')
  t.equal(result.info.title, 'testing')
})

test('clean', (t) => {
  rimraf.sync('./swagger.json')
  t.end()
})
