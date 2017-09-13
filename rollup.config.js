import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babili from 'rollup-plugin-babili';

const production = !process.env.ROLLUP_WATCH;

export default {
	entry: 'src/MyThing.html',
	dest: 'public/svelte/bundle.js',
	format: 'umd',
	moduleName: 'MyThing',
	sourceMap: true,
	plugins: [
		svelte({
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/svelte/bundle.css');
			},

			// this results in smaller CSS files
			cascade: false,
			customElement: true
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), transpile and minify
		// production && buble({ exclude: 'node_modules/**' }),
		// production && babili()
	]
};
