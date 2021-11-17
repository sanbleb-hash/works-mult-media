module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx},/public/**/*.{html}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        shalimer: ['Shalimar', 'cursive'],
      },
      animation: {
        move: 'move 10s ease-out infinite alternate',
      },

      keyframes: {
        move: {
          '0%, 25%': { transform: 'translateY(-36px)' },
          ' 50%': { transform: 'translateY(-72px)' },
          ' 75%': { transform: 'translateY(-109px)' },
        },
      },

      backgroundImage: {
        video:
          "url('https://images.unsplash.com/photo-1618329027137-a520b57c6606?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZWRpdGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')",
        graphics:
          "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80')",
        graphics2:
          "url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80')",
        photography:
          "url('https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
