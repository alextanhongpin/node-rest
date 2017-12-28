/*
 * src/food-service/store.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 28/12/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

export default function Store (db) {
  // When calling external services, prefix the function with fetch
  // e.g. When calling food service
  // async function fetchFood () {
  //  return request('http://localhost:3000/foods/1')
  // }

  // one, all, create, update, delete, count, search is reserved for DB only operation
  async function one (id) {
    const [rows] = await db.query('SELECT * FROM food WHERE id = ?', [id])
    return (rows && rows[0]) || null
  }

  async function all (params) {
    const [rows] = await db.query('SELECT * from food')
    return rows
  }

  async function create ({ id, name }) {
    const [rows] = await db.query('INSERT INTO food (id, name) VALUES (?, ?)', [id, name])
    return rows
  }

  return {
    one,
    all,
    create
  }
}
