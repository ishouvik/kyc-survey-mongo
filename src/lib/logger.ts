import winston from 'winston'
// import { default as Sentry } from 'winston-transport-sentry-node'

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  //   new Sentry({
  //     sentry: {
  //       dsn: process.env.SENTRY_DSN
  //     },
  //     level: 'error'
  // })
  ]
})

export const createLog = (level: string, method: string, path: string, data) : void => {
  logger.log({
    level,
    message: `${method} ${path}`
  })

  if (level === 'error') {
    logger.log({
      level,
      message: JSON.stringify(data)
    })
  }
}
