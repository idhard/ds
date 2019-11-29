import theme, { Theme } from './themes';

export interface BaseProps {
    theme?: Theme;
}

const props = {
    theme: theme,
};

export default props;
