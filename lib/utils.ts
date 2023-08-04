import { isNil, reject, unless } from 'rambda'

export function all(string: TemplateStringsArray, ...args: any[]) {
  if (args.some(isNil)) return undefined
  return String.raw({ raw: string }, ...args)
}

export function connect(list: any[], sep?: string) {
  return reject(isNil, list).join(sep)
}

export const date = unless<string>(isNil, date => new Date(date).toLocaleDateString())

export function scan<T, R>(list: T[], accum: R, fn: (acc: R, val: T) => R) {
  const result = []
  for (const val of list) {
    accum = fn(accum, val)
    result.push(accum)
  }
  return result
}