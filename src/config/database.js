/*
 * src/config/database.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 28/12/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

export default {
  host: {
    doc: 'MySQL hostname',
    format: String,
    default: 'localhost',
    env: 'DB_HOST'
  },
  pool: {
    doc: 'Defines the maximum connection that can be made to MySQL',
    format: Number,
    default: 10,
    env: 'DB_POOL'
  },
  database: {
    doc: 'MySQL name',
    format: String,
    default: 'testdb',
    env: 'DB_NAME'
  },
  user: {
    doc: 'MySQL username',
    format: String,
    default: 'user',
    env: 'DB_USER'
  },
  password: {
    doc: 'MySQL password',
    format: String,
    default: '123456',
    env: 'DB_PASS'
  },
  port: {
    doc: 'MySQL port',
    format: 'port',
    default: '3306',
    env: 'DB_PORT'
  }
}
