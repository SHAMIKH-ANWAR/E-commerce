import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";


/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
	
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	  
];
export const prefix = "";
export const theme = {
	extend: {
		animation: {
		  aurora: 'aurora 5s linear infinite',
		},
		keyframes: {
		  aurora: {
			from: { backgroundPosition: '0% 0%' },
			to: { backgroundPosition: '100% 100%' },
		  },
		},
		fontFamily: {
			edu: ['"Edu AU VIC WA NT Pre"', 'cursive'], // Define Edu AU VIC WA NT Pre
			almendra: ['Almendra', 'serif'],           // Define Almendra
		  },
	  },
	container: {
		center: true,
		padding: "2rem",
		screens: {
			"2xl": "1400px",
		},
	},
	extend: {
		animation: {
			aurora: "aurora 60s linear infinite",
		  },
		  keyframes: {
			aurora: {
			  from: {
				backgroundPosition: "50% 50%, 50% 50%",
			  },
			  to: {
				backgroundPosition: "350% 50%, 350% 50%",
			  },
			},
		  },
		colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
	},
	plugins: [
		addVariablesForColors
	  ],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
	addBase({
	  ":root": newVars,
	});
  }