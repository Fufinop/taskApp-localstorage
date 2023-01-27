module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		tailwindcss: {
			// These are the default values but feel free to customize
			callees: ['classnames', 'clsx', 'ctl'],
			config: 'tailwind.config.js',
			cssFiles: [
				'**/*.css',
				'!**/node_modules',
				'!**/.*',
				'!**/dist',
				'!**/build',
			],
			cssFilesRefreshRate: 5_000,
			removeDuplicates: true,
			skipClassAttribute: false,
			whitelist: [],
			tags: [],
			classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
		'plugin:tailwindcss/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'tailwindcss'],
	rules: {
		'tailwindcss/classnames-order': 'warn',
		'tailwindcss/enforces-negative-arbitrary-values': 'warn',
		'tailwindcss/enforces-shorthand': 'warn',
		'tailwindcss/migration-from-tailwind-2': 'warn',
		'tailwindcss/no-arbitrary-value': 'off',
		'tailwindcss/no-custom-classname': 'warn',
		'tailwindcss/no-contradicting-classname': 'error',
	},
};
