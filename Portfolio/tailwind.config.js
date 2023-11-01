module.exports = {
    content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "0px 20px 25px 3px rgba(0,0,0,0.3)",
                "1button": "0px 0px 5px 6px rgba(0,0,0,0.32)",
            },
        },
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
    },
    plugins: [],
};
