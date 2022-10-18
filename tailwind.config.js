module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
       },
      colors: {
        orange: '#ff5614',
        grey: '#595959',
        yellow:'#EFCE4A',
        background: '#f2f2f2',
        background2: '#D8D8D8',
        background3: '#fffdfb',
        red: "#E1341E",
        blue: "#1b3de4",
        oliveGreen:"#3D550C",
        limeGreen:"#81B622",
        yellowGreen: "#ECF87F",
        green:'#59981A',
        oceanLightBlue:'#95D8EB',
        oceanMiddleBlue:'#4DB4D7',
        oceanBlue:'#0076BE',
        oceanGreen:'#48BF91',
        oceanLightGreen:'#8BD9C7',
        trendyGrey: '#242E38',
        trendyYellow: '#EAC43D',
        trendyBlue: '#2A5C99',
        trendyTurquoise: '#14C0CC',
        trendyGreen: '#A6CD4E',
        trendyRed:'#C43B5A'
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '50': '50px',
        '75': '75px',
        '100': '100px',
        '100': '150px',
        '100': '200px',
        'none':'none'
       },
       maxHeight: {
        '50': '50px',
        '100': '100px',
        'none': 'none'
       },
    },
    screens: {
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '339px'},
      
      'min-xl': {'min': '1279px'},
      'min-lg': {'min': '1023px'},
      'min-md': {'min': '767px'},
      'min-sm': {'min': '639px'},
    }
  },
  variants: {
    minHeight: ['hover', 'focus'],
    maxHeight: ['hover', 'focus'],
    extend: {
    }
  },
  plugins: [],
}
