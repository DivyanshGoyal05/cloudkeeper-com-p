// tailwind.config.js
module.exports = {
    content: ['*'], // Adjust based on your project structure
    theme: {
        extend: {
            fontFamily: {
                "mp": ['Metropolis-normal', 'sans-serif'],
                'metropolis-semibold': ['Metropolis-SemiBold', 'sans-serif'],
                'metropolis-bold': ['Metropolis-Bold', 'sans-serif'],
            },
        },
        // screens: {
        //     'sm': { max: '639px' },
        //     'md': { max: '767px' },
        //     'lg': { max: '1023px' },
        //     'xl': { max: '1279px' },
        // },
    },
    plugins: [],
}
