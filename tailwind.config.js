/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-dosis)"],
            },
            // keyframes: {
            //     glitch: {
            //         "0%": {
            //             "text-shadow": "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00",
            //         },
            //         "15%": {
            //             "text-shadow": "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00",
            //         },
            //         "16%": {
            //             "text-shadow":
            //                 "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00",
            //         },
            //         "49%": {
            //             "text-shadow":
            //                 "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00",
            //         },
            //         "50%": {
            //             "text-shadow": "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00",
            //         },
            //         "99%": {
            //             "text-shadow": "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00",
            //         },
            //         "100%": {
            //             "text-shadow": "-0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00",
            //         },
            //     },
            // },
            // animation: {
            //     glitch: "glitch 500ms infinite",
            // },
        },
    },
    plugins: [],
}
