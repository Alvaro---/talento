/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			tahiti: {
				100: "#cffafe",
				200: "#a5f3fc",
				300: "#67e8f9",
				400: "#22d3ee",
				500: "#06b6d4",
				600: "#0891b2",
				700: "#0e7490",
				800: "#155e75",
				900: "#164e63",
			},
			yellow: "#FDC300",
			blue: "#001F47",
			ligthBlue: "#1D71B8",
			blueMid: "#1550a0"
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				logo_background: "url('../images/background.png')",
				logo_background_large: "url('../images/background_large.png')",
				background_yellow_large: "url('../images/background_yellow_large.png')",
				background_yellow: "url('../images/background_yellow.png')",
			},
		},
	},
	plugins: [
		require("@fortawesome/fontawesome-svg-core"),
		require("@fortawesome/free-brands-svg-icons"),
		require("@fortawesome/react-fontawesome"),
	],
};
