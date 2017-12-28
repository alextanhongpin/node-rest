/*
 * src/food-service/model.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 28/12/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

export default function Model ({ store, schema }) {
  return {
    async one (id) {
      return store.one(id)
    },
    async all () {
      return store.all()
    },
    async create ({ id, name }) {
      const params = { id, name }

      // Perform validation of request schema here
      const validatedParams = await schema('food', params)

      // Call store with the validated params
      return store.create(validatedParams)
    }
  }
}
