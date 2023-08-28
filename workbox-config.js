module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{PNG,png,html,js,json,css,jpg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};