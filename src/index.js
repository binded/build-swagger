import swaggerJSDoc from 'swagger-jsdoc'
import { join } from 'path'
import fs from 'fs'

const requireNoThrow = (file) => {
  /* eslint-disable global-require */
  try {
    return require(join(process.cwd(), file))
  } catch (err) {
    return false
  }
}

const loadDefaultSwaggerJS = () => {
  const swaggerJs = requireNoThrow('./swagger.js')
  if (swaggerJs) return swaggerJs
  return requireNoThrow('./src/swagger.js')
}

const build = ({
  spec = loadDefaultSwaggerJS(),
  jsonPath = './swagger.json',
} = {}) => {
  if (typeof spec === 'string') {
    return build({ jsonPath, spec: requireNoThrow(spec) })
  }
  if (!spec) {
    throw new Error('swagger.js file not found')
  }
  const swaggerSpec = swaggerJSDoc(spec)
  const data = JSON.stringify(swaggerSpec, null, null, true)
  return new Promise((resolve, reject) => {
    fs.writeFile(jsonPath, data, (err) => {
      if (err) return reject(err)
      resolve({ jsonPath })
    })
  })
}

export default build
