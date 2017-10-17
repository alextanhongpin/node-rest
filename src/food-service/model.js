/*
 * src/food-service/model.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 17/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const FoodModel = (store) => {
  return {
    one: (id) => store.one(id),
    all: () => store.all(),
    create: ({ id, name }) => store.create({ id, name })
  }
}

export default (store) => FoodModel(store)
