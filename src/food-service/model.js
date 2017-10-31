/*
 * src/food-service/model.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 17/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const FoodModel = ({ store, schema }) => {
  return {
    one: (id) => store.one(id),
    all: () => store.all(),
    async create ({ id, name }) {
      const params = { id, name }
      try {
        const validatedParams = await schema('food', params)
        return store.create(validatedParams)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}

export default (options) => FoodModel(options)
