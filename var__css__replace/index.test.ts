import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { var__css__replace } from './index.js'
test('var__css__replace', ()=>{
	equal(var__css__replace(
		`div { color: var(--color); font-size: var(--font-size); }`,
		{ '--color': 'red' },
		{ '--font-size': '16px' }
	),
	`div { color: red; font-size: 16px; }`)
})
test.run()
