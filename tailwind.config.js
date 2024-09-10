/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagen-fondo-service': "url('./src/assets/img/services/Service_split_img.png')"
      },
      boxShadow: {
        'customNav': '0 6px 12px 0 rgba(0, 0, 0, 0.25)',
        // 'customCard': '0 12px 12px 0 rgba(0, 0, 0, 0.25) , 0 0 10px 0 rgba(0, 0, 0, 0.2)',
        // 'smallShadow': 'rgba(0,0,0,0.16) 0px 0px 10px',
        // 'bigShadow': 'rgba(0,0,0,0.16) 0px 0px 20px',
        'customButton': 'rgba(0,0,0,0.16) 0px 0px 10px'
      },
      colors: {
        'primary-blue': '#0f6aef',
        'secondary-blue': '#009ee2',
        'dark-blue': '#00112d',
        'aux-1-yellow': '#fccf1a'
      }
    },
  },
  plugins: []
}

