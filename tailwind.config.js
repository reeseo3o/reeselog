/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        // size:[fontsize,lineHeight]
        '2xs': ['0.75rem', '1.125rem'], // 12px
        xs: ['0.875rem', '1.35rem'], // 14px
        sm: ['0.938rem', '1.5rem'], // 15px
        base: ['1rem', '1.25rem'], // 16px
        xl: ['1.125rem', '1.5rem'], // 18px
        '2xl': ['1.25rem', '1.75rem'], // 20px
        '3xl': ['1.375rem', '1.25rem'], // 22px
        '4xl': ['1.5rem', '2rem'], // 24px
        '5xl': ['1.625rem', '2rem'], // 26px
        '6xl': ['1.875rem', '2.5rem'], // 30px
        '7xl': ['2rem', '2.875rem'], // 32px
        '8xl': ['3rem', '3.75rem'], // 48px
        '9xl': ['3.25rem', '4.375rem'], // 52px
        '10xl': ['3.75rem', '5rem'], // 60px
      },
      colors: {
        primary: '#0E2954',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
