function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const MAIN_ROUTE = '/main-route'

export const PATH = {
  main: path(MAIN_ROUTE, '/Main.tsx')
}