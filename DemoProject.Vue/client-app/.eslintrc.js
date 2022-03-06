module.exports = {
	root: true,
	env: {
		/*node: true,*/
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/eslint-config-typescript'
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"indent": ["error", "tab"],
		"vue/script-indent": ["error", "tab", { "baseIndent": 1 }],
		"vue/html-indent": ["error", "tab", { "baseIndent": 1 }],
		"vue/component-name-in-template-casing": ["error", "PascalCase", {
			"registeredComponentsOnly": false,
			"ignores": []
		}]
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
};
