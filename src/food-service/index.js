/*
 * src/food-service/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 28/12/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import Store from './store'
import Model from './model'
import Route from './route'

import express from 'express'
const router = express.Router()

function Service ({ db, schema }) {
  const store = Store(db)
  const model = Model({ store, schema })
  const route = Route(model)

  router
    .use(route.featureToggle)
    .get('/', route.getFoods)
    .get('/:id', route.getFood)
    .post('/', route.postFood)

  return router
}

export default (options) => {
  return {
    basePath: '/foods',
    info: {
      name: 'Food Service',
      service: 'food',
      version: '1.0.0',
      description: 'Endpoint service the food service',
      paths: {
        one: {
          method: 'GET',
          path: '/foods/:id'
        },
        all: {
          method: 'GET',
          path: '/foods'
        },
        create: {
          method: 'POST',
          path: '/foods'
        }
      }
    },
    route: Service(options)
  }
}
