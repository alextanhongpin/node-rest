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
  async function one (id) {
    return store.one(id)
  }

  async function all () {
    return store.all()
  }

  async function create ({ id, name }) {
    // Make params explicit
    const params = { id, name }

    // Perform validation of request schema here
    const validatedParams = await schema('food', params)

    // Call store with the validated params
    return store.create(validatedParams)
  }

  return {
    one,
    all,
    create
  }
}
