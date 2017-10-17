/*
 * src/database/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 17/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import mysql from 'mysql2/promise'

async function connect ({ host, user, database, password, port }) {
  const connection = await mysql.createConnection({
    host,
    user,
    database,
    password,
    port
  })

  connection.connect((error) => {
    if (error) {
      console.log(`databaseError: Connection error with code ${error.code} and message ${error.message}`)
    } else {
      console.log('databaseSuccess: connected to mysql database')
    }
  })

  connection.on('error', (error) => {
    console.log('databaseError:', error)
  })

  return connection
}

export default { connect }
