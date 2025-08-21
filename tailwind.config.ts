import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(220, 13%, 91%)',
				input: 'hsl(220, 13%, 91%)',
				ring: 'hsl(220, 91%, 15%)',
				background: 'hsl(0, 0%, 100%)',
				foreground: 'hsl(215, 25%, 27%)',
				primary: {
					DEFAULT: 'hsl(220, 91%, 15%)',
					foreground: 'hsl(0, 0%, 98%)'
				},
				secondary: {
					DEFAULT: 'hsl(220, 13%, 95%)',
					foreground: 'hsl(215, 25%, 27%)'
				},
				destructive: {
					DEFAULT: 'hsl(0, 84%, 60%)',
					foreground: 'hsl(0, 0%, 98%)'
				},
				muted: {
					DEFAULT: 'hsl(220, 13%, 95%)',
					foreground: 'hsl(215, 10%, 55%)'
				},
				accent: {
					DEFAULT: 'hsl(354, 84%, 57%)',
					foreground: 'hsl(0, 0%, 98%)'
				},
				popover: {
					DEFAULT: 'hsl(0, 0%, 100%)',
					foreground: 'hsl(215, 25%, 27%)'
				},
				card: {
					DEFAULT: 'hsl(0, 0%, 100%)',
					foreground: 'hsl(215, 25%, 27%)'
				}
			},
			borderRadius: {
				lg: '0.75rem',
				md: '0.5rem',
				sm: '0.25rem'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
