/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                sec: "#d0d0a7",
                font_color: "#092c31",
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
