import express from 'express'
import Repository from "../../../repositories/formResponseRepository"

const router = express.Router()
const repo = new Repository()

router.get('*', async (req, res, next) => {
  try {
    const formResponses = await repo.query({
      answerType: 'location'
    })

    req.format = {
      json: formResponses
    }

    req.log = {
      level: 'info'
    }
  } catch (error) {
    res.status(500)
  }

  next()
})


router.post('*', async (req, res, next) => {
  const { body } = req
  try {
    const formResponse = await repo.save(body)

    req.format = {
      json: formResponse
    }

    req.log = {
      level: 'info'
    }
  } catch (error) {
    req.log = {
      level: 'error',
      message: error
    }
  }

  next()
})

export default router
