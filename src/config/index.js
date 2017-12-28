/*
 * src/config/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 17/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import convict from 'convict'

import DB from './database'
import FOOD_SERVICE from './food-service'

const PORT = {
  doc: 'The port to bind',
  format: 'port',
  default: process.env.PORT,
  env: 'PORT'
}

const config = convict({
  port: PORT,
  db: DB,
  service: {
    food: FOOD_SERVICE
  }
})

const validated = config.validate({ allowed: 'strict' })

export default validated
