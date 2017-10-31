/*
 * test/food-service/model.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 30/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/
/* eslint-env mocha */

import chai from 'chai'

import MockFoodStore from './mock-store'
import FoodModel from '../../src/food-service/model'
import Schema from '../../src/schema'

const expect = chai.expect

// In our test, we mock the store and only validate the model
// The route and store should not contain any business logic
const schema = Schema()
const model = FoodModel({
  store: MockFoodStore(),
  schema: Schema()
})

describe('Food Model', () => {
  it('should get a food', async () => {
    const food = await model.one(0)
    expect(food).to.be.not.eq(null)
    expect(food).to.have.property('name')
    expect(food).to.have.property('id')
    expect(food.name).to.be.a('string')
    expect(food.id).to.be.a('number')
  })

  it('should get foods', async() => {
    const foods = await model.all()
    expect(foods).to.be.an('array')
    expect(foods.length).to.be.gt(0)
  })

  it('should create food', async() => {
    const newFood = {id: 3, name: 'pineapple'}
    const foods = await model.create(newFood)
    expect(foods.length).to.be.eq(3)
  })

  it('should throw error if payload for create is wrong', async() => {
    const newFood = {id: [], name: 'pineapple'}
    try {
      await model.create(newFood)
    } catch (error) {
      expect(error).to.be.not.eq(null)
      expect(error.message).to.be.an('array')
      expect(error.message[0].message).to.be.eq('should be integer')
    }
  })
})
