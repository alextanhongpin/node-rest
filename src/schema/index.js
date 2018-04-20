/*
 * src/schema/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 30/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import Ajv from 'ajv'
import request from 'request-promise'

const Schema = () => {
  const ajv = new Ajv({
    allErrors: true, // Tell AJV to return all errors, instead of just 1 error
    removeAdditional: true, // Remove additional fields that is not specified in the payload
    coerceTypes: true // Convert the type to the specified type (e.g. string to int)
  })

  const schemas = {}


  return {
    add (name, schema) {
      const hasName = name && name.trim().length
      if (!hasName || !schema) {
        throw new Error('schemaError: name and schema must be provided')
      }
      schemas[name] = ajv.compile(schema)
    },
    async validate (name, params) {
      const schema = schemas[name]
      if (!schema) {
        return Promise.reject(new Error(`schema ${name} does not exist`))
      }
      const validate = schema(params)
      if (!validate) {
        return Promise.reject(schema.errors)
      }
      return params
    },

    // Load the schema from a uri
    async addFromUrl (name, uri) {
      const schema = await request({
        uri,
        json: true
      })
      schemas[name] = ajv.compile(schema)
      return true
    }
  }
}



export default Schema
