/*
 * src/schema/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 30/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import foodSchema from './food.json'

import Ajv from 'ajv'

const Schema = () => {
  const ajv = new Ajv({
    allErrors: true, // Tell AJV to return all errors, instead of just 1 error
    removeAdditional: true, // Remove additional fields that is not specified in the payload
    coerceTypes: true // Convert the type to the specified type (e.g. string to int)
  })

  const _schemas = {
    // Load all your schemas here
    food: ajv.compile(foodSchema)
  }

  return async(name, payload) => {
    const schema = _schemas[name] ? _schemas[name] : null
    if (!schema) {
      throw new Error(`No schema with the name ${name} found`)
    }
    const valid = schema(payload)
    if (!valid) {
      const error = new Error('Invalid Schema')
      error.message = schema.errors
      throw error
    }
    return payload
  }
}

export default Schema
