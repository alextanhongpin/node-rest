/*
 * src/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 17/10/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import helmet from 'helmet'
import morgan from 'morgan'

import config from './config'
import DB from './database'
import Schema from './schema'
import FoodService from './food-service'

// Schemas
import FoodSchema from './schema/food.json'

// main is where our application resides
async function main () {
  // Create a new application
  const app = express()

  // Middlewares
  middlewares(app)
  
  // Host the schemas as static file
  app.use('/schemas', express.static(path.join(__dirname, 'schema')))

  // Initialize dependencies
  const db = await DB.connect(config.get('db'))
  const schema = Schema()
  schema.add('food', FoodSchema)

  const services = [
    FoodService
    // Would make much more sense when you have multiple services
    // in the same application. e.g.
    // ServiceA
    // ServiceB
    // ServiceC
  ].map(service => service({ db, schema }))

  // Initialize service by looping through them
  services.forEach((service) => {
    app.use(service.basePath, service.route)
  })

  app.get('/', async (req, res) => {
    res.status(200).json({
      endpoints: services.map((service) => service.info),
      routes: app.routes
    })
  })

  // This is a naive example, but you can create an endpoint to toggle the services (on/off)
  // app.get('/toggle', (req, res) => {
  //   const on = config.get('service.food')
  //   config.set('service.food', !on)
  //   res.status(200).json({
  //     on
  //   })
  // })

  app.listen(config.get('port'), () => {
    console.log(`listening to port *:${config.get('port')}. press ctrl + c to cancel`)
  })

  return app
}

// middlewares takes the app, and inject the app with middlewares
function middlewares (app) {
app.use(bodyParser.urlencoded({ extended: false }))
  // To parse json
  app.use(bodyParser.json())
  
  // For security
  app.use(helmet())
  
  // Enable logging during development
  app.use(morgan('dev', {
    skip(req, res) {
      return res.statusCode < 400
    },
    stream: process.stderr
  }))

  app.use(morgan('dev', {
    skip(req, res) {
      return res.statusCode >= 400
    },
    stream: process.stdout
  }))
}

main().catch(console.log)
