const {
    backgroundImage,
    maxWidth,
    minWidth,
    boxShadow,
    spacing,
    maxHeight,
    colors,
} = require('./tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage,
            boxShadow,
            maxWidth,
            minWidth,
            spacing,
            maxHeight,
            colors,
        },
    },
    plugins: [],
};
