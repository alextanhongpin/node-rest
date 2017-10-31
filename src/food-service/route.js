/*
 * src/food-service/route.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 17/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import config from '../config'

import { baseErrorHandler, baseSuccessHandler } from '../helper'

export default (model) => {
  // GET /foods/:id
  // Description: Get food by id
  async function getFood (req, res) {
    try {
      const request = {
        id: req.params.id
      }
      const result = await model.one(request)
      baseSuccessHandler(res)(result)
    } catch (error) {
      baseErrorHandler(res)(error)
    }
  }

  // GET /foods
  // Description: Get an array of foods
  async function getFoods (req, res) {
    try {
      const result = await model.all()
      return baseSuccessHandler(res)(result)
    } catch (error) {
      return baseErrorHandler(res)(error)
    }
  }

  // POST /foods
  // Description: Create a new food, with id and name as body
  async function postFood (req, res) {
    try {
      const result = await model.create(req.body)
      console.log('foods', result)
      return baseSuccessHandler(res)(result)
    } catch (error) {
      return baseErrorHandler(res)(error)
    }
  }

  async function featureToggle (req, res, next) {
    if (config.get('service.food')) {
      return next()
    }
    return res.status(404).json({
      error: 'The endpoint is not implemented',
      code: 404
    })
  }

  return {
    getFood,
    getFoods,
    postFood,
    featureToggle
  }
}
