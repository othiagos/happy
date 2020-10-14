import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    let errs: ValidationErrors = {}
    err.inner.forEach(error => {
      errs[error.path] = error.errors
    })
    return res.status(400).json({ message: 'Validation fails', errs})
  }
  console.error(err)
  return res.status(500).json({ menssage: 'Internal server error' })
}

export default errorHandler