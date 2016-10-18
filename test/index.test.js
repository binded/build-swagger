import test from 'blue-tape'
import { join } from 'path'
import buildSwagger from '../src'

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
  const result = require(jsonPath)
  t.ok(typeof result.info === 'object')
  t.equal(result.info.version, '0.0.1')
})
