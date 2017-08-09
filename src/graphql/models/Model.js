import thinky from '../connector'
import { isNull } from 'lodash'

const models = {}

export function getModel (name) {
  return models[name]
}

export function createModel (name, fields, ...args) {
  const model = thinky.createModel(
    name,
    {
      createdAt: thinky.type.date().default(thinky.r.now()),
      id: thinky.type.string().min(2),
      updatedAt: thinky.type.date(),
      ...fields
    },
    ...args
  )

  models[name] = model

  model.defineStatic('exist', exist)
  model.defineStatic('updateAt', function (fields = {}) {
    fields.updatedAt = thinky.r.now()
    return this.update(fields)
  })

  return model
}

async function exist (offset) {
  try {
    return !isNull(await this.nth(offset).default(null))
  } catch (e) {
    return false
  }
}
