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

async function connect ({ pool, host, user, database, password, port }) {
  const connection = mysql.createPool({
    connectionLimit: pool,
    host,
    user,
    database,
    password,
    port
  })

  return connection
}

export default { connect }
