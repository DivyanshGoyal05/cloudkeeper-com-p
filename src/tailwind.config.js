// tailwind.config.js
module.exports = {
    content: ['*'], // Ideally should be more specific like './src/**/*.{js,ts,jsx,tsx}'
    theme: {
        extend: {
            fontFamily: {
                "mp": ['Metropolis-normal', 'sans-serif'],
                'metropolis-semibold': ['Metropolis-SemiBold', 'sans-serif'],
                'metropolis-bold': ['Metropolis-Bold', 'sans-serif'],
                'metropolis-medium': ['Metropolis-Medium', 'sans-serif'],
                'bitter': ['Bitter', 'serif']
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
