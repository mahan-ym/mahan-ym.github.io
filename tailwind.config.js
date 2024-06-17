/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '574px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
    },
    extend: {
      colors: {
        'persian-blue':'#1C39BB',
        'turquoise-persian-blue':'#57C5C6',
        'persian-indigo':'#32127A',
        'persian-rose':'#FE28A2',
        'persian-pink':'#F77FBE',
        'persian-red':'#C81D11',
        'persian-green':'#00A693',
      },
      keyframes: {
        'moveInCircle': {
          '0%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(180deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        moveVertical: {
          '0%': {transform: 'translateY(-50%)'},
          '50%': {transform: 'translateY(50%)'},
          '100%': {transform: 'translateY(-50%)'},
        },
        moveHorizontal: {
          '0%': {transform: 'translateX(-50%) translateY(-10%)'},
          '50%': {transform: 'translateX(50%) translateY(10%)'},
          '100%': {transform: 'translateX(-50%) translateY(-10%)'},
        },
      }
    },
  },
  plugins: [],
}