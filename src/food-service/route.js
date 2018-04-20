/*
 * src/food-service/route.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 28/12/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import config from '../config'
import { Ok, Err } from '../helper'

export default function Route (model) {
  // GET /foods/:id
  // Description: Get food by id
  async function getFood (req, res) {
    try {
      const result = await model.one(req.params)
      Ok(res)(result)
    } catch (error) {
      Err(res)(error)
    }
  }

  // GET /foods
  // Description: Get an array of foods
  async function getFoods (req, res) {
    try {
      const result = await model.all()
      Ok(res)(result)
    } catch (error) {
      Err(res)(error)
    }
  }

  // POST /foods
  // Description: Create a new food, with id and name as body
  async function postFood (req, res) {
    try {
      const result = await model.create(req.body)
      Ok(res)(result)
    } catch (error) {
      Err(res)(error)
    }
  }

  // POST /toggle
  async function featureToggle (req, res, next) {
    if (config.get('service.food')) {
      return next()
    }
    Err({
      message: 'Not implemented',
      code: 501
    })
  }

  return {
    getFood,
    getFoods,
    postFood,
    featureToggle
  }
}
