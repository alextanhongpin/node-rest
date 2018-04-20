/*
 * src/helper/index.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 28/12/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

export function Err (res) {
  return ({ message, code }) => {
    const data = {
      code,
      error: message
    }
    res.status(400).json(data)
  }
}

export function Ok (res) {
  return (body) => {
    const data = {
      data: body
    }
    res.status(200).json(data)
  }
}
