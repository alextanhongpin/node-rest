/*
 * test/food-service/mock-store.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 30/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const MockFoodStore = () => {
  // This is an example on how we mock our database dependencies
  // Since the model contains all the business logic and validation,
  // we can guarantee that store will return a data when the payload
  // is valid, and null if the payload is not valid
  const collection = [
    {
      id: 1,
      name: 'apple'
    },
    {
      id: 2,
      name: 'banana'
    }
  ]
  async function one (id) {
    if (id > collection.length) {
      return null
    }
    return collection[id]
  }

  async function all (params) {
    return collection
  }

  async function create ({ id, name }) {
    collection.push({id, name})
    return collection
  }

  return {
    one,
    all,
    create
  }
}

export default () => MockFoodStore()
