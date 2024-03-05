/// <reference types="esbuild" />
/// <reference types="./index.d.ts" />
import { stat } from 'node:fs/promises'
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
					const _stat = await stat(path)
					const _suffix = (suffix ? suffix + '&' : '?') + 'esmcss_v=' + _stat.mtimeMs
					const contents = await import(path + _suffix).then(mod=>mod.default())
					return { contents, loader: 'css' }
				}
			)
		},
	}
}
