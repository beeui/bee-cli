export function filterPrefix (prefix: string = '') {
  prefix = (prefix || '').trim()
  if (/[-]+$/.test(prefix)) { // wxc- => wxc-
    return prefix
  } else if (prefix !== '') { // wxc => wxc-
    return `${prefix}-`
  }
  return prefix
}

export function filterNpmScope (scope: string = '') {
  scope = (scope || '').trim()
  if (scope === '') {
    return ''
  }
  if (!scope.startsWith('@')) { // 173 => @173
    scope = `@${scope}`
  }
  if (!scope.endsWith('/')) { // @173 => @173/
    scope = `${scope}/`
  }
  return scope
}
