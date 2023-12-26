/// <reference types="esbuild" />
/// <reference types="./index.d.ts" />
/**
 * @returns {Plugin}
 * @private
 */
export function esmcss_esbuild_plugin_() {
	return {
		name: 'esmcss',
		setup(build) {
			build.onLoad(
				{ filter: /\.css\.(js|ts)$/ },
				async (config)=>{
					const { path, suffix } = config
					const contents = await import(path + (suffix ?? '')).then(mod=>mod.default())
					return { contents, loader: 'css' }
				}
			)
		},
	}
}
