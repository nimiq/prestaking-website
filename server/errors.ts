export function forbiddenError(message?: string, cause?: Error) {
  return createError({
    message,
    statusCode: 403,
    statusMessage: 'Forbidden',
    cause,
  })
}

export function notAcceptableError(message?: string, cause?: Error) {
  return createError({
    message,
    statusCode: 406,
    statusMessage: 'Not Acceptable',
    cause,
  })
}

export function internalServerError(message?: string, cause?: Error) {
  return createError({
    message,
    statusCode: 500,
    statusMessage: 'Internal Server Error',
    cause,
  })
}
