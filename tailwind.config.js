module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // unkwown uses
        //'accent-1': '#FAFAFA',
        //'accent-2': '#EAEAEA',
        //'accent-7': '#333',
        //success: '#0070f3', // blue
        //cyan: '#79FFE1', // green cyan

        // dark greys
        'primary-1': '#202020', // component background, dark grey
        'primary-2': '#121212', // main background, darker grey
        // reds
        'secondary-1': '#bf1b00', // main red
        'secondary-2': '#8c1400', // darker red
        'secondary-3': '#ff2400', // brighter red
        'alert': "#ff2400", // alert banner background
        // whites
        'highlight-1': '#eee', // #light grey
        'header': '#eee', // #light grey
        'maintext': '#ccc', // #grey
        'nav': '#666', // nav border
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ccc', // default text colour
            // h1: controls text following '#' in _pages docs, e.g., # Code Of Conduct
            h1: {
              color: '#eee', // #e32000
            },
            // h2: controls text following '##' in _pages docs, e.g., ## Respectful Behaviour
            h2: {
              color: '#eee', // #e32000
            },
            // h3: controls text following '###' in _pages docs, e.g., ### Application Process
            h3: {
              color: '#eee',
            },
            h4: {
              color: '#eee',
            },
            h5: {
              color: '#eee',
            },
            h6: {
              color: '#eee',
            },
            // strong: controls text within "**" in _pages docs, e.g., **11am and 2pm**
            strong: {
              color: '#eee',
            },
            code: {
              color: '#ff2400',
            },
            // em: controls text within "*" in _pages docs, e.g., *Treat one another with respect*
            em: {
              color: '#bf1b00',  // secondary-1
            },
            blockquote: {
              color: '#ff2400',
            },
            img: {
              display: 'block',
              margin: '0 auto',
            },
            pre: {
              color: '#ff2400',
              backgroundColor: '#141414', // #26203b
            },
            a: {
              textDecoration: 'no-underline',
              color: '#bf1b00', // bf1b00 secondary-1
              //hover: {
              //  color: '#00ff00', // ff2400 secondary-3
              //},
            },
          },
        },
      },
      flex: {
        '1/3': '0 1 30%',
        '1/2': '0 1 45%',
        '1/4': '0 1 25%',
      },
      height: {
        map: '500px',
        mapSmall: '250px',
      },

      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      maxWidth: {
        '1/2': '50%',
      },
      height: {
        map: '500px',
      },
      cursor: {
        help: 'help',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          textDecoration: 'underline',
          textDecorationColor: '#EEAA844',
        },
      };

      addUtilities(extendUnderline);
    },
  ],
};
