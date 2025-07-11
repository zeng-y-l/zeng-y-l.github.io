export function all(string: TemplateStringsArray, ...args: (string | undefined)[]) {
  if (args.some(x => x == null)) return undefined
  return String.raw({ raw: string }, ...args)
}

export const date = (date?: string) => date && new Date(date).toLocaleDateString()
