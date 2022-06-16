const Path = require("path");
const pwd = process.env.PWD;

const projectPaths = [
  Path.join(pwd, "./dan/templates/**/*.html"),
  Path.join(pwd, "../dan/templates/**/*.html"),
  Path.join(pwd, "../../dan/templates/**/*.html"),
  // add js file paths if you need
];

const contentPaths = [...projectPaths];
console.log(`tailwindcss will scan ${contentPaths}`);

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');


module.exports = {
  darkMode: 'class',
  content: contentPaths,
  theme: {
    extend: {
      screens: {
        "xs": '475px',
        ...defaultTheme.screens
      },
      fontFamily: {
        "raleway": ["'Raleway'", "Montserrat", "sans-serif"],
        "slab": ["'Antic Slab'", "serif"]
      },
      colors: {
        "dark": "#191d20",
        "light": "#DCDCDD",
        "variant-1": "#f9ce66",
        "variant-2": "#A12568",
      },
      keyframes: {
        wiggle: {
            '0%, 100%': { transform: 'rotate(-9deg)' },
            '50%': { transform: 'rotate(9deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-slow': 'wiggle 2s linear infinite',
        'ping-slow': 'ping 1s linear infinite',
        'ping-slower': 'ping 2s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
    scrollBar: ["rounded"],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
};
