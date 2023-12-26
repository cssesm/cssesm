import { build } from 'esbuild'
import { dirname, join } from 'path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { esmcss_esbuild_plugin_ } from './index.js'
test('esmcss_esbuild_plugin_', async ()=>{
	// stdin config does not with onLoad
	// see https://github.com/evanw/esbuild/issues/720
	const result = await build({
		entryPoints: [join(dirname(new URL(import.meta.url).pathname), '../_fixtures/index.css.ts')],
		plugins: [esmcss_esbuild_plugin_()],
		write: false,
	})
	equal(result.outputFiles.map(outputFile=>new TextDecoder().decode(outputFile.contents)), [
		`div {
  color: var(--color);
  font-size: var(--font-size);
}
`
	])
})
test.run()
