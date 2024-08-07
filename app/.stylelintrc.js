module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue/scss',
	],
	plugins: ['stylelint-scss'],
	rules: {
		'color-hex-length': 'long',
		'max-nesting-depth': [4, {ignoreAtRules: ['each', 'media', 'supports', 'include']}],
		'no-descending-specificity': null
	}
};
