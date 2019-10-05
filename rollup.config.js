import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import clear from 'rollup-plugin-clear'

const firstPlugins = [
	clear({
		targets: ['dist'],
		watch: true,
	}),
]

const plugins = [
	typescript({
		module: 'ESNext',
		tsconfigOverride: { compilerOptions: { declaration: true } },
	}),
]

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]

// for poor fellas w/o tree shaking
const tree = [
	'debounce',
	'throttle',
	'memoize',
	'getCookie',
	'spin',
	'createArraySpinner',
	'createGetUniqId',
	'lastOf',
	'range',
]

export default [
	{
		input: `src/index.ts`,
		output: [
			{ file: `dist/${pkg.main}`, format: 'cjs', name: 'tools' },
			{ file: `dist/${pkg.module}`, format: 'esm', name: 'tools' },
		],
		plugins: [...firstPlugins, ...plugins],
		external,
	},
].concat(
	tree.map(fruit => ({
		input: `src/${fruit}.ts`,
		output: [{ file: `dist/${fruit}.js`, format: 'cjs', name: fruit }],
		plugins,
		external,
	})),
)
