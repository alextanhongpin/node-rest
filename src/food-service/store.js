/*
 * src/food-service/store.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 17/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const FoodStore = (db) => {
  async function one (id) {
    const [rows] = await db.query('SELECT * FROM food WHERE id = ?', [id])
    return (rows && rows[0]) || null
  }

  async function all (params) {
    const [rows] = await db.query('SELECT * from food')
    return rows
  }

  async function create ({ id, name }) {
    return db.query('INSERT INTO food (id, name) VALUES (?, ?)', [id, name])
  }

  return {
    one,
    all,
    create
  }
}

export default (db) => FoodStore(db)
