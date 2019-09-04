import { Route } from 'router5'

export const routesToMap = (routes: Route[]) => {
	let out: { [name: string]: any } = {}

	function walk(child: Route[], prefix: string) {
		for (let item of child) {
			out[`${prefix}${item.name}`] = item

			if (item.children) {
				walk(item.children, `${prefix}${item.name}.`)
			}
		}
	}

	walk(routes, '')

	return out
}
