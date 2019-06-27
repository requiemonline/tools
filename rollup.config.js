import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import clear from 'rollup-plugin-clear'

const firstPlugins = [
	clear({
    targets: ['dist'],
    watch: true
  }),
]

const plugins = [
  typescript({
    module: 'ESNext',
    // useTsconfigDeclarationDir: true
  }),
]

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

// export default {
// 	input: `src/index.ts`,
//   output: [
//   	{ file: pkg.main, format: 'cjs', name: 'tools' },
//   	{ file: pkg.module, format: 'esm', name: 'tools' },
//   ],
// 	plugins: [...firstPlugins, ...plugins],
// 	external
// }

const modules = ['debounce', 'throttle', 'memoize']

export default [{
	input: `src/index.ts`,
  output: [
  	{ file: pkg.main, format: 'cjs', name: 'tools' },
  	{ file: pkg.module, format: 'esm', name: 'tools' },
  ],
	plugins: [...firstPlugins, ...plugins],
	external
}].concat(modules.map((module, i) => ({
	input: `src/${module}.ts`,
  output: [
  	{ file: `dist/${module}.js`, format: 'cjs', name: module },
  ],
	plugins,
	external
})))
