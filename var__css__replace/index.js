/**
 * @param {string}css
 * @param {Record<string, string>}_var_R_a
 * @returns {string}
 */
export function var__css__replace(css, ..._var_R_a) {
	const var_R = _var_R_a.reduce((
		var_R,
		_var_R
	)=>({
		...var_R,
		..._var_R,
	}), {})
	return css.replaceAll(/var\(([^)]*)\)/g, (_, $)=>var_R[$])
}
