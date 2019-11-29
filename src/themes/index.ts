export interface Theme {
    colors: { primary: string };
}

const themeSettings = {
    colors: {
        primary: 'red',
        secondary: 'teal',
        text: 'black',
    },
    fonts: {
        serif: '"Merriweather", serif',
        sansSerif: '"Montserrat", sans-serif',
    },
    fontSize: {
        xl: '2.4rem',
        lg: '1.8rem',
        md: '1.3rem',
        nm: '1rem',
        sm: '0.75rem',
    },
};

export default themeSettings;
