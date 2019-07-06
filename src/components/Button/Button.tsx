import * as React from 'react';
import styled from 'styled-components';
import defaultProps, { BaseProps } from '../../default-props';

interface Props extends BaseProps {
    /**
     * Click event handler
     * @default null
     */
    onClick?: () => void;

    primary?: boolean;
}

const Button: React.SFC<Props> = ({ children, onClick, primary }): React.ReactElement => (
    <StyledButton type="button" onClick={onClick} primary={primary}>
        {children}
    </StyledButton>
);

const StyledButton = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props: Props) => (props.primary ? props.theme.colors.primary : 'white')};
    color: ${(props: Props) => (props.primary ? 'white' : 'palevioletred')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

StyledButton.defaultProps = defaultProps;

//without this Enzime doesn't find the button :(
StyledButton.displayName = 'StyledButton';

export default Button;
