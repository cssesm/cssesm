# esmcss
Import .css.ts/.css.js functions &amp; focused css helper classes from ES Modules using esbuild

## install

[//]: @formatter:off
```
npm i -D esmcss
```
[//]: @formatter:on

## usage

Build file

[//]: @formatter:off
```ts
import { build } from 'esbuild'
import { esmcss_esbuild_plugin_ } from 'esmcss'
await build({
  entryPoints: [/* source code entry point */],
  plugins: [esmcss_esbuild_plugin_()]
})
```
[//]: @formatter:on

Component file

[//]: @formatter:off
```ts
import './component.css.js'
// ... Component definition
```
[//]: @formatter:on

css.ts file

[//]: @formatter:off
```ts
export default ()=>`
.my_component {
  color: green;
}
`
```
[//]: @formatter:on
