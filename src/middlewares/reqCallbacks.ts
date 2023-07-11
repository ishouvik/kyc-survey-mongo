import * as url from 'url'
import { createLog } from '../lib/logger'

export const beforeAction = (req, res, next) => {
  const { protocol, hostname, originalUrl, query } = req
  req.tags = []
  req.format = {
    text: '',
    json: {}
  }
  req.log = {
    level: '',
    data: {}
  }
  req.currentFullPath = url.format({
    protocol,
    host: hostname,
    pathname: originalUrl,
    query
  })
  req.currentUser = {
    id: null,
    userType: null,
    roleName: null
  }
  next()
}

export const afterAction = async (req, res) => {
  const { format, log, currentFullPath, method } = req
  const { level, data } = log

  if (log.statusCode && log.statusCode !== 200) {
    res.status(log.statusCode)
  }

  res.header('x-requested-with', '*')
  res.header('access-control-allow-methods', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'])
  res.header('access-control-allow-headers', '*')
  res.header('Access-Control-Max-Age', 86400)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.removeHeader('x-powered-by')

  createLog(level, method, currentFullPath, data)

  res.json(format.json)
}
