// utils/number.ts
export function toPersianNumber(num: number | string): string {
  const en = ['0','1','2','3','4','5','6','7','8','9']
  const fa = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']

  return String(num).split('').map(c => {
    const index = en.indexOf(c)
    return index !== -1 ? fa[index] : c
  }).join('')
}
