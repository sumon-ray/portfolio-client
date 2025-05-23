// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))', // এটি এখন #0f3460 হবে (আপনার globals.css অনুযায়ী)
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  },
		  sidebar: {
			DEFAULT: 'hsl(var(--sidebar-background))',
			foreground: 'hsl(var(--sidebar-foreground))',
			primary: 'hsl(var(--sidebar-primary))',
			'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
			accent: 'hsl(var(--sidebar-accent))',
			'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
			border: 'hsl(var(--sidebar-border))',
			ring: 'hsl(var(--sidebar-ring))'
		  },
		  // কন্টাক্ট ফর্মের জন্য কাস্টম কালারগুলো এখানে যোগ করুন
		  contactGradient: {
			start: 'hsl(var(--contact-bg-start))',
			middle: 'hsl(var(--contact-bg-middle))',
			end: 'hsl(var(--contact-bg-end))',
		  },
		  // আপনি চাইলে আপনার নিজস্ব কিছু ব্র্যান্ড কালার এখানে যোগ করতে পারেন
		  brand: {
			// উদাহরণ: আপনার ব্র্যান্ডের মূল রং
			blue: '#0f3460', // হেক্স কোড সরাসরি
			purple: '#6b4c9b',
			// ইত্যাদি
		  },
		},
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' }
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' }
		  },
		  // আপনি যদি 'animate-blob' ক্লাস ব্যবহার করেন, তার কীফ্রেম এখানে থাকতে হবে
		  blob: {
			'0%': { transform: 'translate(0px, 0px) scale(1)' },
			'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
			'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
			'100%': { transform: 'translate(0px, 0px) scale(1)' },
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		  'blob': 'blob 7s infinite ease-in-out', // animate-blob এর জন্য
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }