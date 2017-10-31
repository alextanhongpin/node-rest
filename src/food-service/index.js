/*
 * src/food-service/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 17/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import FoodStore from './store'
import FoodModel from './model'
import FoodRoute from './route'

import express from 'express'
const router = express.Router()

const FoodService = ({ db, schema }) => {
  const model = FoodModel({
    store: FoodStore(db),
    schema
  })
  const route = FoodRoute(model)

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
    route: FoodService(options)
  }
}
