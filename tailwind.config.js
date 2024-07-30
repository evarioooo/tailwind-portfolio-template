const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html', './**/*.js', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				dark: '#171717',
				darken: '#1b1b1b',
				darkener: '#202020',
				blue: '#005e9e',
				bluehover: '#2876ee',
				blue950: '#172554',
				blue900: '#1e3a8a',
			},
			textShadow: {
				sm: '0 1px 2px #000000',
				DEFAULT: '0 2px 4px #000000',
				lg: '0 8px 16px #000000',
			},
		},
		fontFamily: {
			nunito: ['nunito', 'sans-serif'],
			roboto: ['roboto', 'sans-serif'],
		},
		container: {
			center: true,
			padding: '0px',
			screens: {
				sm: '800px',
				md: '1000px',
				lg: '1200px',
				xl: '1200px',
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			);
		}),
		require('flowbite/plugin'),
	],
};
