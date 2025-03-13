/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      animation: {
        'spinner-FBXaB': 'spinner2 1.25s linear infinite',
        'addrow-y5PGF': 'heightInc 1.25s linear ',
        'height-dec-10-0': 'heightDec 1.25s linear ',
        'moveright-BPigm': 'moveright 1.25s linear ',
      },
      keyframes: {
        spinner2: {
          '0%': { opacity: '1' },
          '10%': { opacity: '0.7' },
          '20%': { opacity: '0.5' },
          '35%': { opacity: '0.3' },
          '50%': { opacity: '0.2' },
          '75%': { opacity: '0.1' },
          '100%': { opacity: '0' },
        },
        heightInc: {
          '0%': { height: '0' },
          '100%': { height: '10' },
        },
        heightDec: {
          '0%': { height: '10' },
          '100%': { height: '0' },
        },
        moveright: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
      },
      transitionProperty: {
        height: 'height',
        left: 'left',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: [
    'px-1',
    'px-2',
    'px-3',
    'px-4',
    'px-5',
    'px-6',
    'px-7',
    'px-8',
    'px-9',
    'bg-blue-500',
    'bg-green-500',
    'bg-red-500',
    'bg-orange-500',
  ],
};
