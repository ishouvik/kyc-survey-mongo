import dbConnection from "../db/connection";

export const connect = async (req, res, next) => {
  try {
    await dbConnection.create()
  } catch (e) {
    throw new Error(e)
  }

  next()
}

export const close = async (req, res, next) => {
  try {
    await dbConnection.close()
  } catch (e) {
    throw new Error(e)
  }

  next()
}
