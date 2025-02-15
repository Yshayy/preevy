import lodash from 'lodash'

export const editUrl = (
  url: URL | string,
  { hostname, queryParams, username, password }: Partial<{
    hostname: string
    queryParams: Record<string, string>
    username: string
    password: string
  }>,
) => {
  const u = new URL(url.toString())
  return Object.assign(u, {
    ...hostname ? { hostname } : {},
    ...queryParams ? {
      search: new URLSearchParams(lodash.defaults(queryParams, Object.fromEntries(u.searchParams.entries()))),
    } : {},
    ...username ? { username } : {},
    ...password ? { password } : {},
  })
}
